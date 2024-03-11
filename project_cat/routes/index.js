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

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.render("index", { title: "햄버거 버튼" });
});
//==============================

router.get("/achieve", async (req, res, next) => {
  res.render("ham/achieve", { title: "업적" });
});

//==============================
router.get("/info", async (req, res, next) => {
  res.render("ham/info", { title: "내 정보" });
});

//==============================
router.get("/rank", async (req, res, next) => {
  try {
    // 모든 SCORE 레코드를 검색합니다.
    const row1 = await SCORE.findAll({
      limit: 1,
    });

    // 사용자의 고유 식별자를 사용하여 USER 레코드를 검색합니다.
    const row2 = await USER.findByPk(123); // 이 부분에서 사용자의 식별자를 정확히 지정해야 합니다.

    // 렌더링할 데이터를 템플릿에 전달합니다.
    res.render("ham/rank", {
      title: "랭킹",
      RANKING: row1,
      USER: row2,
    });
  } catch (err) {
    // 오류가 발생한 경우 에러 핸들링
    next(err);
  }
});

//==============================
router.get("/setting", async (req, res, next) => {
  res.render("ham/setting", { title: "설정" });
});

//==============================
export default router;
