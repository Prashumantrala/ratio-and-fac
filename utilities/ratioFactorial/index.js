const ratioindex = require("../ratio/index");
const factorialindex = require("../factorial/index.js");

const ratioAndFactorial = (num1, num2, num3) => {
  let ratio = ratioindex(num1, num2);
  let factorial = factorialindex(num3);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
