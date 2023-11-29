import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { authContext } from "../context";
import { toast } from "react-toastify";

const Nav = () => {
  const [state,setState]= authContext();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("auth");

    setState({
      user:{},
      token:""
    });
    navigate("/login");
    toast.success("Logged out successfully");
  };
  return (
    <ul className="nav border">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/">
          Home
        </Link>
      </li>
      {state && state.token ? (
        <>
          <li className="nav-item">
            <span onClick={logout} className="nav-link">
              Logout
            </span>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Nav;
