var twoSum = function (nums, target) {
  const array = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        array.push(i, j);
        return array;
      }
    }
  }
  return null;
};
