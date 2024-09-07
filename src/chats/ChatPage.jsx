import socketIO from "socket.io-client";
import {useUserDetails} from "../authentication" 
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


export const ChatPage = () => {
    
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const { id: chatId } = useParams();
    const { user } = useUserDetails();
    

    useEffect(()=>{
        const createConnection = async ()=>{
            const socketConnection = socketIO("http://4.213.171.237:8080",{
               query:{
                token: await user.getIdToken()
               } 
            });

            setSocket(socketConnection);

            socketConnection.on("updatedChats",(data)=>{
                if(data.chatId== chatId){
                    setMessages(data.messages);
                }
            })
        }
        
        createConnection();
    },[user,chatId]);


    const sendMessage = async()=>{
        socket.emit("sendMessage",{
            message,
            chatId,
            userId: user.uid,
            query:{
                token: await user.getIdToken()
            }
        });
        setMessage("");
    }

    return (
        <div className="container">
         <ul className="list-group mt-2">
            {messages.map((message, i) => (
            <li key={i} className="list-group-item">
                <h3>{message.postedBy.name}</h3>
                <p>{message.text}</p>
            </li>
            ))}
        </ul>

        <div className="input-group mt-3">
        <input
          type="text"
          placeholder="Enter a new message"
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage} className="btn btn-info">
          Send
        </button>
      </div>

        </div>
    )
}