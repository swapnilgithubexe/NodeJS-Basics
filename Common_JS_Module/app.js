// Note:  Please do not change the pre-written code

// import the required module here
const math = require("./math")
const sum = math.sum;
const mean = math.mean;

const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    console.log(`The sum is ${sum(nums)}`);
    console.log(`The mean is ${mean(nums)}`);


};
Solution();
module.exports = Solution;
