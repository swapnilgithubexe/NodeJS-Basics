// Do not change the pre-written code.
// Make the necessary imports here.
// const path = require("path");
// const fs = require("fs");
import fs from "fs"


export const writeBlog = (filePath, name) => {
  // Write your code here.
  fs.appendFileSync(filePath, name)
}

export const publishBlog = (filePath) => {
  // Write your code here.
  const buffer = fs.readFileSync(filePath, { encoding: "utf-8" });
  return buffer;
}