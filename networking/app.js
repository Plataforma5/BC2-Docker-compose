const express = require("express");
const cors = require("cors");
const { router } = require("./src/router");
const app = express();

// Enable cors for public access
app.use(cors());

// Healthcheck
app.get("/health", (req, res) => {
  res.status(200).end();
});

// JSON parsing
app.use(express.json());

// Remove express header
app.use((req, res, next) => {
  res.removeHeader("X-Powered-By");
  next();
});

// API requests routing
app.use("/", router);

module.exports = app;
