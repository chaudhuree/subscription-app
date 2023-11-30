import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import StripeCancel from "./pages/StripeCancel";
import StripeSuccess from "./pages/StripeSuccess";
import Account from "./pages/Account";
import Basic from "./pages/plans/Basic";
import Standard from "./pages/plans/Standard";
import Premium from "./pages/plans/Premium";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/stripe/cancel" element={<StripeCancel />} />
          <Route path="/stripe/success" element={<StripeSuccess />} />
          <Route path="/account" element={<Account />} />
          <Route path="/basic" element={<Basic />} />
          <Route path="/standard" element={<Standard />} />
          <Route path="/premium" element={<Premium />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
