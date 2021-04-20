import React, {useState} from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

export default function UserProvider(props){

    const initState ={
        requests: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState);
    
    function addRequest(newRequest){
        userAxios.post('/access', newRequest)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                requests: [...prevState.requests, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    return(
        <UserContext.Provider
            value={{
                ...userState,
                addRequest
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}