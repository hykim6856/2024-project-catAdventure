import express from "express";
const router = express.Router();
import DB from "../models/index.js";
const USER = DB.models.tbl_user;

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.render("index", { title: "Hello callor.com Express" });
});

export default router;
