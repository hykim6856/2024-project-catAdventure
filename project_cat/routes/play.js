import express from "express";
import DB from "../models/index.js";
const router = express.Router();
const CAT = DB.models.tbl_cat;
const BAG = DB.models.tbl_bag;
const SCORE = DB.models.tbl_score;
const USER = DB.models.tbl_user;

/* GET users listing. */
router.get("/", async (req, res, next) => {
  // 유저테이블에서 하이스코어 찾기
  const highscore = await USER.findAll({
    where: { u_seq: 123 },
  });
  // 퍼그파일에 하이스코어 보내기
  res.render("play.pug", { HIGHSCORE: highscore });
});

router.get("/:s_score", async (req, res, next) => {
  const s_score = req.params.s_score;

  // 유저 테이블에서 이전의 하이스코어 찾기
  const oldhighscore = await USER.findAll({
    where: { u_seq: 123 },
  });

  const highestScore = await SCORE.findOne({
    where: { s_useq: 123 },
    order: [["s_score", "DESC"]],
  });

  // 스코어 받아서 점수 테이블에 추가하기
  await SCORE.create({
    s_score: s_score,
    s_useq: 123,
  });

  // 만약 SCORE의 s_score 의 가장 큰 숫자가. s_score 보다 작으면 업데이트
  if (oldhighscore.s_score < s_score) {
    await USER.update({ u_best: s_score }, { where: { u_seq: 123 } });
  } else if (!oldhighscore.s_score) {
    await USER.update(
      { u_best: highestScore.s_score },
      { where: { u_seq: 123 } }
    );
  } else {
  }

  res.redirect("/play");
});

export default router;
