const middle = function(arr) {
  const arrLength = arr.length;
  const middleIndex = Math.floor(arrLength / 2);
  if (arrLength <= 2) {
    return [];
  } else if (arrLength % 2 === 0) {
    return [arr[middleIndex - 1],arr[middleIndex]];
  } else {
    return [arr[middleIndex]];
  }
};
module.exports = middle;
