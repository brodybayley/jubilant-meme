var makeGood = function (s) {
  if (s === "") {
    return s;
  }
  function repeatLoop(s) {
    for (let i = 0; i < s.length - 1; i++) {
      if (
        (s[i] === s[i].toUpperCase() && s[i + 1] === s[i].toLowerCase()) ||
        (s[i] === s[i].toLowerCase() && s[i + 1] === s[i].toUpperCase())
      ) {
        s.splice(i, 2);
        repeatLoop(s);
      }
    }
    return s;
  }
  return repeatLoop(s.split("")).join("");
};
