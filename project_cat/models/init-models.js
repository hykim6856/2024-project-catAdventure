import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tbl_achieve from "./tbl_achieve.js";
import _tbl_bag from "./tbl_bag.js";
import _tbl_cat from "./tbl_cat.js";
import _tbl_friends from "./tbl_friends.js";
import _tbl_item from "./tbl_item.js";
import _tbl_score from "./tbl_score.js";
import _tbl_user from "./tbl_user.js";

export default function initModels(sequelize) {
  // 모델 이름 설정
  const tbl_achieve = _tbl_achieve.init(sequelize, DataTypes);
  const tbl_bag = _tbl_bag.init(sequelize, DataTypes);
  const tbl_cat = _tbl_cat.init(sequelize, DataTypes);
  const tbl_friends = _tbl_friends.init(sequelize, DataTypes);
  const tbl_item = _tbl_item.init(sequelize, DataTypes);
  const tbl_score = _tbl_score.init(sequelize, DataTypes);
  const tbl_user = _tbl_user.init(sequelize, DataTypes);

  // tbl_authors.belongsTo(tbl_users, {
  //   as: "username_tbl_user",
  //   foreignKey: "username",
  // });
  // tbl_users.hasMany(tbl_authors, {
  //   as: "tbl_authors",
  //   foreignKey: "username",
  // });

  // 다른 곳에서 model 을 사용할수 있도록 export 준비
  return {
    tbl_achieve,
    tbl_bag,
    tbl_cat,
    tbl_friends,
    tbl_item,
    tbl_score,
    tbl_user,
  };
}
