function sum(nums) {
  return nums.reduce((total, num) => total + num, 0);
}

function mean(nums) {
  return sum(nums) / nums.length;
}

module.exports = {
  sum: sum,
  mean: mean,
};
