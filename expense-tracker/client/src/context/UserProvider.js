import React, {useState} from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        expenses: [],
        errMsg: ""
    }
    const [userState, setUserState] = useState(initState)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials){
        axios
          .post("/auth/login", credentials)
          .then((res) => {
            const { user, token } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            getUserExpenses()
            setUserState((prevUserState) => ({
              ...prevUserState,
              user,
              token,
            }));
          })
          .catch((err) => handleAuthErr(err.response.data.errMsg));
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: [],
            token: '',
            expenses: []
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    function getUserExpenses(){
        userAxios.get("/api/expense/user")
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                expenses: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addExpense(newExpense){
        userAxios.post("/api/expense", newExpense)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                expenses: [...prevState.expenses, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function updateExpense(updates, expenseId){
        userAxios.put(`/api/expense/${expenseId}`)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                expenses: prevState.expenses.map(expense => expense._id !== expenseId ? expense : res.data)
            }))
        })
        .catch(err => console.log(err))
    }

    function deleteExpense(expenseId){
        userAxios.delete(`/api/expense/${expenseId}`)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                expenses: prevState.expenses.filter(expense => expense._id !== expenseId)
            }))
        })
    }

    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addExpense,
                updateExpense,
                deleteExpense,
                resetAuthErr,
                getUserExpenses
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}