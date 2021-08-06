const UserModel = require("../models");

class userController {
  static async getAll() {
    const result = await UserModel.findAll();
    return res.status(200).send(result);
  }

  static async get(id) {
    const result = await UserModel.findByPk(id);
    return res.status(200).send(result);
  }
}

module.exports = userController;
