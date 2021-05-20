var reorderList = function (head) {
  const finalArray = [];
  const halfWay = Math.round(head.length / 2);
  for (let i = 0; i < head.length; i++) {
    if (head.length === halfWay) {
      finalArray.push(head[i]);
    } else {
      finalArray.push(head[i]);
      finalArray.push(head[head.length - 1]);
      head.pop();
    }
  }
  return finalArray;
};

console.log(reorderList([1, 2, 3, 4]));
