const { join } = require("path");
const { readFileSync } = require("fs");
const connection = require("./connection");

const build = () => {
  const sql = readFileSync(join(__dirname, "build.sql")).toString();
  return connection.query(sql);
};

module.exports = build;
