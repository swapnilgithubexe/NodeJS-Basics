
import fs from "fs"


export const writeBlog = (filePath, name) => {
  fs.appendFileSync(filePath, name)
}

export const publishBlog = (filePath) => {
  const buffer = fs.readFileSync(filePath, { encoding: "utf-8" });
  return buffer;
}