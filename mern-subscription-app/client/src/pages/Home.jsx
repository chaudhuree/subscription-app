import axios from "axios";
import React, { useEffect, useState } from "react";
import PriceCard from "../components/cards/PriceCard.jsx";

const Home = () => {
  const [prices, setPrices] = useState([]);
  const nameArray = ["BASIC","STANDARD","PREMIUM"];

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get("/prices");
    // console.log("prices get request", data);
    setPrices(data);
  };

  const handleClick = async (e, price) => {
    e.preventDefault();
    console.log("plan clicked", price.id);
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
        prices.map((price,i) => (
          <PriceCard key={price.id} price={price} handleSubscription={handleClick} name={nameArray[i]} />
        ))}
      </div>
    </div>
  );
};

export default Home;
