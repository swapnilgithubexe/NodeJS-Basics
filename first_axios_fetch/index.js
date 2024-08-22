// Please do not change the prewritten code
const axios = require("axios");
const Solution = async () => {
  const { data } = await axios.get("https://api.codingninjas.com/api/v3/event_tags");
  console.log(data)
};
Solution();
module.exports = Solution;
