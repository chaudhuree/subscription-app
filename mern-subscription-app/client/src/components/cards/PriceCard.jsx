import React from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../context";
const PriceCard = ({ price, name, handleSubscription, userSubscriptions }) => {
  const [state, setState] = authContext();
  const dynamicDescription = () => {
    if (name.toUpperCase() === "BASIC") {
      return "5 exclusice stocks";
    } else if (name.toUpperCase() === "STANDARD") {
      return "10 exclusice stocks";
    } else if (name.toUpperCase() === "PREMIUM") {
      return "20 exclusice stocks";
    }
  };

  const buttonStyle = () => {
    return name.toUpperCase() === "BASIC" ? "btn-outline-danger" : "btn-danger";
  };

  const headerStyle = () => {
    return name.toUpperCase() === "PREMIUM" ? "bg-danger text-light" : "";
  };

  const borderStyle = () => {
    return name.toUpperCase() === "PREMIUM" ? "border-danger" : "";
  };

  const buttonText = () => {
    return state && state.token ? "Buy the plan" : "Sign up";
  };
  return (
    <div className="col">
      <div className={`card mb-4 rounded-3 shadow-sm ${borderStyle()}`}>
        <div className={`card-header py-3 ${headerStyle()}`}>
          <h4 className="my-0 fw-normal">{name.toUpperCase()}</h4>
        </div>

        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            {(price.unit_amount / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}{" "}
            <small className="text-muted fw-light">/mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li className="fw-bold">{dynamicDescription()}</li>
            <li>Free market analysis</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>

          <Link to="/register">
            <button
              onClick={(e) => handleSubscription(e, price)}
              className={`w-100 btn btn-lg ${buttonStyle()}`}
            >
              {userSubscriptions.includes(price.id)
                ? "Access plan"
                : buttonText()}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
