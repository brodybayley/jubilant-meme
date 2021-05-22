var reverse = function (x) {
  let finalInteger = "";
  let splitNum = x.toString();
  if (splitNum[0] === "-") {
    finalInteger += "-";
    splitNum = splitNum.substring(1);
  }
  if (splitNum.length === 1) {
    return splitNum;
  }
  for (let i = splitNum.length - 1; i >= 0; i--) {
    if (finalInteger.length === 0 && splitNum[i] === 0) {
    } else {
      finalInteger += splitNum[i];
    }
  }
  return finalInteger;
};

console.log(reverse(901000));
