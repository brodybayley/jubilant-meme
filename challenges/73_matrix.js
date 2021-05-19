var setZeroes = function (matrix) {
  // create new array to push arrays to
  const elementArray = [];
  // create a loop to loop through each of the arrays
  for (const subArray of matrix) {
    if (subArray.includes(0)) {
      for (let j = 0; j < subArray.length; j++) {
        if (subArray[j] === 0) {
          elementArray.push(j);
        }
      }
    }
  }

  const outputArray = [];
  for (const subArray of matrix) {
    for (const element of elementArray) {
      if (subArray.includes(0)) {
        const zeroArray = subArray.map((x) => 0);
        outputArray.push(zeroArray);
      } else {
        subArray.splice(element, 1, 0);
        outputArray.push(subArray);
      }
    }
  }
  return outputArray;
  // return new array with 0's
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
