import express from "express";
import { requireSignin } from "../middlewares";
import { prices,createSubscription,subscriptionStatus, } from "../controllers/subs";

const router = express.Router();


router.get("/prices", prices);
router.post("/create-subscription", requireSignin, createSubscription);
router.get("/subscription-status", requireSignin, subscriptionStatus);

module.exports = router;
