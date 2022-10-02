const signout = (req, res, next) => {
  res.clearCookie("token").send("logged out!");
};

module.exports = signout;