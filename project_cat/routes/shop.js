import express from "express";
import DB from "../models/index.js";
const router = express.Router();
const ITEM = DB.models.tbl_item;
const BAG = DB.models.tbl_bag;

/* GET users listing. */
router.get("/", async (req, res, next) => {
  res.send("respond with a resource");
});

export default router;
