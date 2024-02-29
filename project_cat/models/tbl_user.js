import { Model } from "sequelize";

export default class tbl_user extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        u_seq: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        u_id: {
          type: DataTypes.STRING(35),
          allowNull: false,
        },
        u_pw: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        u_name: {
          type: DataTypes.STRING(35),
          allowNull: false,
        },
        u_image: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        u_best: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        u_coin: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        u_fish: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        u_role: {
          type: DataTypes.STRING(35),
          allowNull: true,
        },
        u_level: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        u_exp: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "tbl_user",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "u_seq" }],
          },
        ],
      }
    );
  }
}
