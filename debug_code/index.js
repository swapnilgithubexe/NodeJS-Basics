const http = require("http")

const server = http.createServer((req, res) => {
  const resMessage = "I am a Ninja";
  res.end(resMessage);
});

server.listen(3000, () => {
  console.log("server is listening at port 3000");
});

module.exports = server;
