const tail = function(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return (newArr);
  } else {
    for (let i = 1; i < arr.length; i++) {
      newArr[i - 1] = arr[i];
    }
  }
  return newArr;
};

module.exports = tail;