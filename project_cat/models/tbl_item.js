const { Model } = _sequelize;

export default class tbl_item extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        i_seq: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        i_name: {
          type: DataTypes.STRING(125),
          allowNull: false,
        },
        i_manual: {
          type: DataTypes.STRING(225),
          allowNull: true,
        },
        i_image: {
          type: DataTypes.STRING(225),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "tbl_item",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "i_seq" }],
          },
        ],
      }
    );
  }
}
