var romanToInt = function (s) {
  let finalCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I" && s[i + 1] === "V") {
      finalCount += 4;
      i++;
    } else if (s[i] === "I" && s[i + 1] === "X") {
      finalCount += 9;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "L") {
      finalCount += 40;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "C") {
      finalCount += 90;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "D") {
      finalCount += 400;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "M") {
      finalCount += 900;
      i++;
    } else if (s[i] === "V") {
      finalCount += 5;
    } else if (s[i] === "X") {
      finalCount += 10;
    } else if (s[i] === "L") {
      finalCount += 50;
    } else if (s[i] === "C") {
      finalCount += 100;
    } else if (s[i] === "D") {
      finalCount += 500;
    } else if (s[i] === "M") {
      finalCount += 1000;
    } else if (s[i] === "I") {
      finalCount += 1;
    }
  }
  return finalCount;
};
