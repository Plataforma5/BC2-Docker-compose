const userService = require("../services");

class userController {
  static async getAll(req, res) {
    try {
      const result = await userService.getAll();
      return res.status(200).send(result);
    } catch (error) {
      console.log("Call id: %s error:%s", callId, JSON.stringify(error));
      const status = error.status;

      if (status === undefined) return res.status(500).send();

      return res.status(status).send(error);
    }
  }

  static async get(req, res) {
    const { id } = req.params;

    try {
      const result = await userService.get(id);
      return res.status(200).send(result);
    } catch (error) {
      console.log("Call id: %s error:%s", JSON.stringify(error));
      const status = error.status;
      if (status === undefined) return res.status(500).send();
      return res.status(status).send(error);
    }
  }
}

module.exports = userController;
