// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  res.end(fs.readFileSync("index.html"));
})

server.listen(8080, () => {
  console.log("Server running on 8080")
})
module.exports = server;
