// Please don't change the pre-written code

const path = require("path");
const { getAbsolutePath } = require("./pathResolver.js");

const Solution = () => {
  const path_to_file = path.join("src", "file.txt");
  console.log(getAbsolutePath(path_to_file));
};
Solution();
module.exports = Solution;
