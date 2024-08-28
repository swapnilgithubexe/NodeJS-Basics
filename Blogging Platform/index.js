import readline from "readline";
import { publishBlog, writeBlog } from "./blogActions.js";

const iface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

iface.question("Enter your blog: ", (input) => {
  writeBlog("myblog.txt", input);
  iface.close();
  console.log(publishBlog("myblog.txt"));
});
