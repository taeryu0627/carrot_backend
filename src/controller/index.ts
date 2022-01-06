import express from "express";
import TradeController from "./trade.controller";

const router = express.Router();

router.use("/trade", TradeController);

export default router;
