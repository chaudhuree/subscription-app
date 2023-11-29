import express from "express";
import { requireSignin } from "../middlewares";
import { prices,createSubscription } from "../controllers/subs";

const router = express.Router();


router.get("/prices", prices);
router.post("/create-subscription", requireSignin, createSubscription);

module.exports = router;
