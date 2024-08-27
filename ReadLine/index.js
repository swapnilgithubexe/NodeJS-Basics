// Import required module
const { stdout } = require("process");
const readline = require("readline");



const Solution = () => {
  // Write your code here
  const cninterface = readline.createInterface({
    input: process.stdin,
    output: stdout,
  });
  cninterface.question("Enter 1st number: ", (num1) => {
    cninterface.question("Enter 2nd number: ", (num2) => {
      console.log(Math.max(num1, num2))
    })
  })
};

Solution();
module.exports = Solution;
