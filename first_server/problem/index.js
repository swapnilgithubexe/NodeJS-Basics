// Please don't change the pre-written code
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Server started")
})

server.listen(8080, () => {
  console.log("Response received at port 8080.");
})
// Import the necessary modules here

// Write your code here

module.exports = server;
