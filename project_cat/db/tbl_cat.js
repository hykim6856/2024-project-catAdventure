import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_cat extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    c_seq: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    c_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_exp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_image: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    c_image1: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    c_image2: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    c_image3: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    c_image4: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    c_image5: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    c_image6: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    c_ox: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_useq: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_cat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "c_seq" },
        ]
      },
    ]
  });
  }
}
