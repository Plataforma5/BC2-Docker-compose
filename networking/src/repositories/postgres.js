const Sequelize = require("sequelize");

/**
 * Connect to database and set pool
 */

const POSTGRES_DB = process.env.POSTGRES_DB;
const POSTGRES_USER = process.env.POSTGRES_USER;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
const DB_MAIN_HOST = process.env.DB_MAIN_HOST;

const db = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
  host: DB_MAIN_HOST,
  dialect: "postgres",
  logging: false,
});

/**
 * force destroy mysql connection
 */
const disconnect = () => db.close();

module.exports = { disconnect, db };
