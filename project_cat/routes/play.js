import express from "express";
import DB from "../models/index.js";
const router = express.Router();
const CAT = DB.models.tbl_cat;
const BAG = DB.models.tbl_bag;
const SCORE = DB.models.tbl_score;
const USER = DB.models.tbl_user;

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const highestScore = await SCORE.findOne({
    attributes: [
      [
        DB.sequelize.fn("MAX", DB.sequelize.col("s_score")),
        "highestScore",
      ],
    ],
    where: { s_useq: 123 },
  });

  res.render("play.pug", { highestScore: highestScore.highestScore });
});

router.get("/:s_score", async (req, res, next) => {
  const s_score = req.params.s_score;

  await SCORE.create({
    s_score: s_score,
    s_useq: 123,
  });

  res.redirect("/play");
});

export default router;
