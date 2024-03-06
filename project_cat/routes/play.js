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

router.get("/:s_score", async (req, res, next) => {
  const s_score = req.params.s_score;

  try {
    await DB.tbl_score.create({
      s_score: s_score,
      s_useq: "123",
    });
    return res.redirect("/play");
  } catch (error) {
    return res.json(error);
  }
});

export default router;
