// Import the necessary modules here.
const path = require("path");

exports.getAbsolutePath = (filePath) => {
  // Write your code here
  const absPath = path.resolve("src", "file.txt");
  return absPath;
};
