import React, { useState, useEffect } from "react";
import axios from "axios";
import { SyncOutlined } from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import { authContext } from "../context";

const StripeSuccess = () => {
  const [state, setState] = authContext();
  const navigate = useNavigate();
  useEffect(() => {
    const getSubscriptionStatus = async () => {
      const { data } = await axios.get("/subscription-status",{
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth")).token}`,
        },
      });
      console.log("SUBSCRIPTION STATUS => ", data,data.subscriptions.length);
      if (data && data.subscriptions.length === 0) {
        navigate("/");
      } else {

        // update user in local storage
        const auth = JSON.parse(localStorage.getItem("auth"));
        auth.user = data;
        localStorage.setItem("auth", JSON.stringify(auth));
        // update user in context
        setState(auth);
        setTimeout(() => {
          navigate("/account");
        }, 1000);
      }
    };
        

    getSubscriptionStatus();
  }, []);
  return (
    <div
      className="d-flex justify-content-center fw-bold"
      style={{ height: "90vh" }}
    >
      <div className="d-flex align-items-center">
        <SyncOutlined spin style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default StripeSuccess;
