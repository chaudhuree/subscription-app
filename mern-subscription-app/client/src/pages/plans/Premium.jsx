import React, { useState, useEffect } from "react";
import { authContext } from "../../context";
import { getPlanName } from "../../utils";
import { useLocation,useNavigate } from "react-router-dom";

const Premium = ({ history, match }) => {
  const [state, setState] =authContext();
  const [result, setResult] = useState([]);
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();
// console.log('pathName', pathName);

  useEffect(() => {
    let result = [];
    const check = () =>
      state &&
      state.user &&
      state.user.subscriptions &&
      state.user.subscriptions.map((sub) => {
        result.push(getPlanName(sub.plan.amount).toLowerCase());
      });
    check();

    // console.log("MATCH", match);
    const plan = pathName.split("/")[1].toLowerCase(); // basic
    if (!result.includes(plan)) {
     navigate("/");
    }
  }, [state && state.user]);

  return (
    <>
      <div className="container-fluid">
        <div className="row py-5 bg-light text-center">
          <h1 className="display-4 fw-bold">PREMIUM</h1>
          <p className="lead">
            Here are your 20 exclusive stocks of this month
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 p-5 rounded bg-dark text-light">
            <ul className="lead">
              <li>Tesla</li>
              <li>Microsoft</li>
              <li>PayPal</li>
              <li>Square</li>
              <li>Alibaba</li>
              <li>Gamestop</li>
              <li>Jumia</li>
              <li>Palantir</li>
              <li>Nio</li>
              <li>Space</li>
              <li>Doyu</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Pintrest</li>
              <li>Tencent</li>
              <li>Coinbase</li>
              <li>Robinhood</li>
              <li>Bitcoin</li>
              <li>Ethereum</li>
              <li>Cardano</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4>Market analysis</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ratione pariatur ab unde voluptatem ea, quae veniam
              aperiam sint porro aliquid animi eveniet, culpa id reiciendis vel
              nihil veritatis qui.
            </p>
            <h4>Email support</h4>
            <p>subscriptions@domain.com</p>
            <h4>Help center</h4>
            1300 123 456
          </div>
        </div>
      </div>
    </>
  );
};

export default Premium;

