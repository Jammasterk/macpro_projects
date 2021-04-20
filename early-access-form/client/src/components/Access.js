import React, {useState, useContext} from "react"
import AccessForm from "./AccessForm"
import { UserContext } from "../context/UserProvider";

const initInputs = {requests: ""}

export default function Access(props){
    const [inputs, setInputs] = useState(initInputs);
    const {
        requests
    } = useContext(UserContext)

     function handleChange(e) {
       const { name, value } = e.target;
       setInputs((prevInputs) => ({
         ...prevInputs,
         [name]: value,
       }));
     }

     function handleRequest(e){
        e.preventDefault()
        requests(inputs)
     }

    return(
        <div>
            <AccessForm
                handleChange={handleChange}
                handleSubmit={handleRequest}
                inputs={inputs}
             />
        </div>
    )
}