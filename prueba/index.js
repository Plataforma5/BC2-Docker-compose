const express = require("express");
const routes = require("./routes");

const server = express();

server.use(express.static("static"));

server.use(routes);

const PORT = process.env.PORT || 3001;

server.listen(PORT);
console.log(`Listening at port ${PORT}`);
