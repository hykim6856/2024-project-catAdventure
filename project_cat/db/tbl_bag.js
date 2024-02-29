import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_bag extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    b_seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    b_iseq: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    b_iname: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    b_quan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    b_iimage: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    b_imanual: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    b_useq: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_bag',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "b_seq" },
        ]
      },
    ]
  });
  }
}
