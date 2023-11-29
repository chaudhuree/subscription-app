import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import StripeCancel from "./pages/StripeCancel";
import StripeSuccess from "./pages/StripeSuccess";
import Account from "./pages/Account";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
