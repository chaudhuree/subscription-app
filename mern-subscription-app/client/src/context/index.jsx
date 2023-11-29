import React from "react";
import { useState, useEffect, createContext,useContext } from "react";
import axios from "axios";

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: "",
  });

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("auth")));
  }, []);

  // axios config
  const token = state && state.token ? state.token : "";
  axios.defaults.baseURL = "http://localhost:5000/api/v1";
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

const authContext =()=> useContext(UserContext);
export {  UserProvider, authContext };
