import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignInPage } from "./authentication";
import { NavBar } from "./navigation";

export const AppRoutes = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Router>
  );
};
