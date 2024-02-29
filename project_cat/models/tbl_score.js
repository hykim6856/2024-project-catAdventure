const { Model } = _sequelize;

export default class tbl_score extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        s_seq: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        s_score: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        s_useq: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "tbl_score",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "s_seq" }],
          },
        ],
      }
    );
  }
}
