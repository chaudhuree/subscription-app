import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PriceCard from "../components/cards/PriceCard.jsx";
import { authContext } from "../context";
import { getPlanName } from "../utils/index.js";

const Home = () => {
  const [prices, setPrices] = useState([]);
  const [userSubscriptions, setUserSubscriptions] = useState([]);
  const [state, setState] = authContext();


  const navigate = useNavigate();

  useEffect(() => {
    fetchPrices();
  }, []);

  useEffect(() => {
    let result = [];
    const check = () =>
      state &&
      state.user &&
      state.user.subscriptions &&
      state.user.subscriptions.map((sub) => {
        result.push(sub.plan.id);
      });
    check();
    setUserSubscriptions(result);
  }, [state && state.user]);

  const fetchPrices = async () => {
    const { data } = await axios.get("/prices");
    // console.log("prices get request", data);
    setPrices(data);
  };

  const handleClick = async (e, price) => {
    e.preventDefault();
    // if plan is already subscribed, redirect to /plan page
    if (userSubscriptions && userSubscriptions.includes(price.id)) {
      navigate(`/${getPlanName(price.unit_amount)}`);
      
      
      return;
    }
    // console.log("plan clicked", price.id);
    if (state && state.token) {
      const { data } = await axios.post("/create-subscription", {
        priceId: price.id,
      });
      window.open(data);
    } else {
      navigate("/register");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row col-md-6 offset-md-3 text-center">
        <h1 className="pt-5 fw-bold">
          Explore the right plan for your business
        </h1>
        <p className="lead pb-4">Choose a plan that suites you best!</p>
      </div>

      <div className="row pt-5 mb-3 text-center">
        {prices &&
          prices.map((price, i) => (
            <PriceCard
              key={price.id}
              price={price}
              handleSubscription={handleClick}
              name={getPlanName(price.unit_amount)}
              userSubscriptions={userSubscriptions}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
