const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'garvit-is-a-good-boy-qwertyuiopp', {
    expiresIn: "30d",
  });
};

module.exports = generateToken;