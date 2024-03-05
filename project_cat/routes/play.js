import express from "express";
import DB from "../models/index.js";
const router = express.Router();
const CAT = DB.models.tbl_cat;
const BAG = DB.models.tbl_bag;

/* GET users listing. */
router.get("/", async (req, res, next) => {
  // res.send("respond with a resource");
  res.render("play.pug");
});

export default router;
