const { createPool } = require("mysql2");

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "newdb",
  connectionLimit: 1000,
}).promise();

module.exports = pool;
