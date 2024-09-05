import { Link } from "react-router-dom";
import {useUserDetails} from "../authentication";
import {useGetCall} from "../services";
import { Loader } from "../Loader";


export const ChatListPage = () => {
  const {user} = useUserDetails();
  const {isLoading,data:chats}=useGetCall(`/users/${user.uid}/chats`);

  if(isLoading){
    return <Loader/>
  }
  console.log("chats",chats);

  return (
    <div className="container">
      <h1>Chats List</h1>
      <hr />
       {chats.map(chat=>(
        <Link to={`/chat/${chat._id}`}>
          <div className="list-item">
            <h3>{chat.name}</h3>
            <p>{chat.ids.length} Members</p>
          </div>
        </Link>
       ))}
      <Link to="/new-chat">
        <button className="btn btn-primary">New Chat</button>
      </Link>
    </div>
  );
}