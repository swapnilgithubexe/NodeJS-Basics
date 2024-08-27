// Please don't change the pre-written code
// Import the necessary modules here
const fs = require("fs");

const Solution = () => {
  // Write your code here
  fs.writeFileSync("notes.txt", "The world has enough coders");
  const buffer = fs.readFileSync("notes.txt", { encoding: "utf-8" });
  console.log(buffer);

  fs.appendFileSync("notes.txt", "BE A CODING NINJA!");
  const buffer_2 = fs.readFileSync("notes.txt", { encoding: "utf-8" });
  console.log(buffer_2);

};
Solution();
module.exports = Solution;
