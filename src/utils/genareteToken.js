require("env2")(".env");
const { sign, verify } = require("jsonwebtoken");

const generateTokenAsync = (payLoad) =>
  new Promise((resolve, reject) => {
    sign(payLoad, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        return reject(err);
      }

      return resolve(token);
    });
  });
module.exports = generateTokenAsync;
