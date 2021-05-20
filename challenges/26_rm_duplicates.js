var removeDuplicates = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      //i-- decrement subtracts 1 and returns value before decrementing
      nums.splice(i--, 1);
    }
  }
  return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
