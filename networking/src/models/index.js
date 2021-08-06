const { DataTypes, Model } = require("sequelize");
const { db } = require("../repositories/postgres");

class User extends Model {}
User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "User",
  }
);

module.exports = User;
