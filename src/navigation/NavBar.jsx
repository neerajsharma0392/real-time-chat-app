import { Link } from "react-router-dom";
import logo from "./../../src/logo.webp";

export const NavBar = () => {
  return (
    <nav className="navbar border-bottom bg-light">
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <img
          src={logo}
          alt="ChitChat logo"
          style={{
            width: 50,
            height: 50,
          }}
        />
        <h5
          style={{
            color: "black",
            display: "inline",
          }}
        >
          ChitChat App
        </h5>
      </Link>
    </nav>
  );
};
