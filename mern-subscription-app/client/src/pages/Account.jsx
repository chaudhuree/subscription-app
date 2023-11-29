import React, { useState, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { authContext } from "../context";
import moment from "moment";

const Account = () => {
  const [state, setState] = authContext();
  const [subscriptions, setSubscriptions] = useState([]);
  const planArray=[{amount:1000, planName:"BASIC"},{amount:2000, planName:"STANDARD"},{amount:5000, planName:"PREMIUM"}]

  const getPlanName=(amount)=>{
    const plan=planArray.find(plan=>plan.amount===amount)
    return plan.planName
  }
  useEffect(() => {
    const getSubscriptions = async () => {
      const { data } = await axios.get("/subscriptions");
      console.log("subs => ", data);
      setSubscriptions(data.data);
    };

    if (state && state.token) getSubscriptions();
  }, [state && state.token]);

  return (
    <div className="container">
      <div className="row">
        <UserOutlined className="display-4" />
        <h1>Account</h1>
        <p className="lead pb-4">Subscription status</p>
        {/* <pre>{JSON.stringify(subscriptions, null, 4)}</pre> */}
      </div>

      <div className="row">
        {subscriptions &&
          subscriptions.map((sub) => (
            <div key={sub.id}>
              <section>
                <hr />
               {/*
                 <h4 className="fw-bold">{sub.plan.nickname}</h4> 
               */}
                <h4 className="fw-bold text-success">{getPlanName(sub.plan.amount)}</h4>
                <h5>
                  {(sub.plan.amount / 100).toLocaleString("en-US", {
                    style: "currency",
                    currency: sub.plan.currency,
                  })}
                </h5>
                <p>Status: {sub.status}</p>
                <p>
                  Card last 4 digit: {sub.default_payment_method.card.last4}
                </p>
                <p>
                  Current period end:{" "}
                  {moment(sub.current_period_end * 1000)
                    .format("dddd, MMMM Do YYYY h:mm:ss a")
                    .toString()}
                </p>
                <button className="btn btn-outline-danger">Access</button>{" "}
                <button className="btn btn-outline-primary">
                  Manage Subscription
                </button>
              </section>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Account;
// 1703875822