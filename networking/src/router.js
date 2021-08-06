const express = require("express");
const userController = require("./controllers");
const router = express.Router();

/* User */
router.get(`/users/`, userController.getAll);
router.get(`/users/:id`, userController.get);

module.exports = { router };
