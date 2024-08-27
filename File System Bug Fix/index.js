const fs = require("fs");

const Solution = () => {
  fs.appendFile("note.txt", " new data", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data successfully updated")
      fs.readFile("note.txt", { encoding: "utf-8" }, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });

    }
  });

}
Solution();
module.exports = Solution;