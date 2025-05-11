const without = function(source, itemToRemove) {
  let newString = [];
  for (let i = 0; i < source.length; i ++)  {
    for (let j = 0; j < itemToRemove.length; j ++)  {
      if (source.includes(itemToRemove[j]) === false) {
        newString.push(source[i]);
      }
    }
  }
  return (newString);
  
};

module.exports = without;
