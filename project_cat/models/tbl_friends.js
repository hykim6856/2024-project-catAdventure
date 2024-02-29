import { Model } from "sequelize";

export default class tbl_friends extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        f_seq: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        f_fuseq: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        f_ulevel: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        u_best: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        f_ox: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        f_useq: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "tbl_friends",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "f_seq" }],
          },
        ],
      }
    );
  }
}
