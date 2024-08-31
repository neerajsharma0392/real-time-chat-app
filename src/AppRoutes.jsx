import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignInPage } from "./authentication";
import { NavBar } from "./navigation";
import { ChatListPage } from "./chats/ChatListPage";
import { ProtectRoute } from "./authentication/ProtectRoute";
import { NewChatPage } from "./chats/NewChatPage";

export const AppRoutes = ({user}) => {
  return (
    <Router>
      <NavBar user={user}></NavBar>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
        <Route path="/" element={<ChatListPage/>}/>
        </Route>
        <Route path="/new-chat" element={<NewChatPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Router>
  );
};
