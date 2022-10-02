import { compare } from "bcryptjs";
import { userByEmail } from "../../database/quiries";
import CustomError from "../../utils/customError";
import generateTokenAsync from "../../utils/genareteToken";
import { signInSchema } from "../../utils/validate";

const signin = (req, res, next) => {
  const { name, email } = req.body;
  let id;
  let img;
  signInSchema
    .validateAsync(req.body)
    .then(() => userByEmail(email))
    .then(({ rowCount }) => {
      if (!rowCount)
        throw new CustomError("This email does not have any account", 404);
      else {
        id = data.rows[0].id;
        img = data.rows[0].img;
        const hash = data.rows[0].password;
        return compare(password, hash);
      }
    })
    .then((compered) => {
      if (compered) generateTokenAsync({ id, name, img });
      else throw new CustomError("WRONG PASSWORD!", 404);
    })
    .catch((err) => {
      if (err.details) {
        next(CustomError(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};
module.exports = signin;
