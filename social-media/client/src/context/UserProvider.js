import React, {useState} from 'react'
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        products: [],
        errMsg: ""
    }
    const [userState, setUserState] = useState(initState)

    function signup(credentials){
        axios.post('/auth/signup', (credentials))
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
        axios.post("/auth/login", credentials)
        .then(res => {
            const {user, token} = res.data;
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getProduct()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            products:[],
            token: "",
            user: {}
        })
    }
    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ''
        }))
    }

    function getProduct(){
        userAxios.get("/product")
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                products: res.data
            }))
        })
        .catch(err => console.log(err))
    }

    function addProduct(newProduct){
        userAxios.post("/product", newProduct)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                products: [...prevState.products, res.data]
            }))
        })
    }

    function updateProduct(updates, productId){
        userAxios.put(`/api/product/${productId}`, updates)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                products: prevState.products.map(product => product._id !== productId ? product : res.data)
            }))
        })
        .catch(err => console.log(err))
    }

    function deleteProduct(productId){
        userAxios.delete(`api/product/${productId}`)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                products: prevState.products.filter(product => product._id !== productId)
            }))
        })
        .catch(console.log("Unable to delete product"))
    }

    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                resetAuthErr,
                logout,
                addProduct,
                getProduct,
                updateProduct,
                deleteProduct
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}