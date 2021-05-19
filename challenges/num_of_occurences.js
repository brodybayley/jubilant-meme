var uniqueOccurrences = function (arr) {
  const countObject = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    countObject[num] = countObject[num] ? countObject[num] + 1 : 1;
  }
  //will place all values into an array
  const valuesArr = Object.values(countObject);
  //Set func will create a new array, but with no duplicate values
  const uniqueNums = [...new Set(valuesArr)];
  //will compare lengths and return false if different
  return valuesArr.length === uniqueNums.length;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
