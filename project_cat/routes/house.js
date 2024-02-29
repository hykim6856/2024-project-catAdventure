import express from "express";
import DB from "../models/index.js";
import { upLoad } from "../modules/file_upload.js";
const router = express.Router();
const CAT = DB.models.tbl_cat;

/* GET users listing. */
router.get("/", async (req, res, next) => {
  res.send("respond with a resource");
});

export default router;
