import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignInPage } from "./authentication";
import { NavBar } from "./navigation";
import { ChatListPage } from "./chats/ChatListPage";
import { ProtectRoute } from "./authentication/ProtectRoute";

export const AppRoutes = ({user}) => {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
        <Route path="/" element={<ChatListPage/>}/>
        </Route>
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Router>
  );
};
