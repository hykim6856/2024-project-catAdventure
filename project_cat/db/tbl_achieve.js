import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_achieve extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    a_seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    a_name: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    a_quan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    a_ox: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    a_useq: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_achieve',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "a_seq" },
        ]
      },
    ]
  });
  }
}
