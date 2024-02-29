import express from "express";
import DB from "../models/index.js";
import { upLoad } from "../modules/file_upload.js";
const USER = DB.models.tbl_user;
const BAG = DB.models.tbl_bag;
const ACHIEVE = DB.models.tbl_achieve;
const ITEM = DB.models.tbl_item;
const FRIENDS = DB.models.tbl_friends;
const SCORE = DB.models.tbl_score;

const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  res.send("respond with a resource");
});

export default router;
