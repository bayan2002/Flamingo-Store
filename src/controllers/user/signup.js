const { addUser, userByEmail } = require("../../database/quiries");
const { hash } = require("bcryptjs");
const { signUpSchema } = require("../../utils/validate");
const { customError } = require("../../utils/customError");
const generateTokenAsync = require("../../utils/genareteToken");

const signup = (req, res, next) => {
  const { name, email, img, password } = req.body;
  signUpSchema
    .validateAsync(req.body)
    .then(() => userByEmail(email))
    .then((data) => {
      if (data.rowCount) throw new customError("Email already Exists", 409);
      return password;
    })
    .then((password) => hash(password, 10))
    .then((hashed) => addUser(req.body, hashed))
    .then((data) => {
      const { id, name, img } = data.rows[0];
      return generateTokenAsync({ id, name, img });
    })
    .then((token) =>
      res
        .status(201)
        .cookie("token", token, { httpOnly: true })
        .json({ message: "Success", status: 201 })
    )
    .catch((err) => {
      if (err.details) {
        next(new CustomError(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};
module.exports = signup;
