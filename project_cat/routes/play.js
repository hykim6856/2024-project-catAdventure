import express from "express";
import DB from "../models/index.js";
const router = express.Router();
const CAT = DB.models.tbl_cat;
const BAG = DB.models.tbl_bag;
const SCORE = DB.models.tbl_score;
const USER = DB.models.tbl_user;

/* GET users listing. */
router.get("/", async (req, res, next) => {
  // res.send("respond with a resource");
  res.render("play.pug");
});

router.get("/:s_score", async (req, res, next) => {
  const s_score = req.params.s_score;

  await SCORE.create({
    s_score: s_score,
    s_useq: 123,
  });
  // try {
  //   await DB.tbl_score.create({
  //     s_score: s_score,
  //     s_useq: 123,
  //   });
  //   return res.redirect("/play");
  // } catch (error) {
  //   return res.redirect("/play");
  // }
});

export default router;
