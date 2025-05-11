const tail = function(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return (newArr);
  } 
  return arr.slice(1);
};
module.exports = tail;