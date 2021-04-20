import React, {useState, useEffect, useRef} from 'react'
import Message from "./components/Message"
import io from "socket.io-client"
import immer, { current } from "immer"


const initialMessageState = {
    general: [],
    questions: [],
    gaming: [],
    homework: []
}

export default function App() {
    const [username, setUsername] = useState('')
    const [connected, setConnected] = useState(false)
    const [currentChat, setCurrentChat] = useState({isChannel: true, chatName: "general", receiverId: ""})
    const [connectedRooms, setConnectedRooms] = useState(["general"])
    const [allUsers, setAllUsers] = useState([])
    const [messages, setMessages] = useState(initialMessageState)
    const [message, setMessage] = useState("")
    const socketRef = useRef()

    function handleMessageChange(e){
        setMessage(e.target.value)
    }

    function sendMessage(){
        const payload = {
            content: message,
            to: currentChat.isChannel ? currentChat.chatName: currentChat.receiverId,
            sender: username,
            chatName: currentChat.chatName,
            isChannel: currentChat.isChannel
        }
        socketRef.current.emit("send message", payload);
        const newMessages = immer(messages, draft => {
            draft[currentChat.chatName].push({
                sender: username,
                content: message
            })
        })
        setMessages(newMessages)
    }

    function roomJoinCallback(incomingMessages, room){
        const newMessages = immer(messages, draft => {
            draft[room] = incomingMessages
        })
        setMessages(newMessages)
    }

    function joinRoom(room){
        const newConnectedRooms = immer(connectedRooms, draft => {
            draft.push(room)
        })
        socketRef.current.emit("join room", room, (messages) => roomJoinCallback(messages, room))
        setConnectedRooms(newConnectedRooms)
    }

    function toggleChat(currentChat){
        if(!messages[currentChat.chatName]){
            const newMessages = immer(messages, draft => {
                draft[currentChat.chatName] = []
            })
            setMessages(newMessages)
        }
        setCurrentChat(currentChat)
    }

    function handleChange(e){
        setUsername(e.target.value)
    }

    function connect(){
        setConnected(true)
        socketRef.current = io.connect('/')
        socketRef.current.emir("join room", "general", (messages) => roomJoinCallback())
        socketRef.current.on("new user", allUsers => {
            setAllUsers(allUsers)
        })
        
    }

    let body; 

    return (
        <div>
            <Message />
        </div>
    )
}
