const { db } = require("./repositories/postgres");
const app = require("../app");
const PORT_NUMBER = process.env.PORT || 3000;

app.use((req, res) => {
  res.status(404);
  res.send({ error: "not Found - error 404" });
});

db.sync().then(() => {
  console.info(`DB connection open`);
  app.listen(PORT_NUMBER, () => {
    console.info(`Server listening @ http://localhost:${PORT_NUMBER}`);
  });
});
