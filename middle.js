const middle = function(arr)
{
  let arrLength = arr.length;
  let middleIndex = Math.floor(arrLength / 2);
  if (arrLength <= 2) {
      return [];
    } else if (arrLength % 2 === 0) {
    return [arr[middleIndex-1],arr[middleIndex]]
  } else {
  return [arr[middleIndex]]
  }
}
module.exports =middle;
