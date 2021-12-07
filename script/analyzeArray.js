function analyzeArray(array) {
  let numberArray = array.map(element => Number(element))
    .filter(element => !isNaN(element));

  const average = numberArray
    .reduce((previousValue, currentValue) => previousValue + currentValue) / numberArray.length;

  const min = numberArray.reduce((previousValue, currentValue) => {
    return Math.min(currentValue, previousValue)
  });

  const max = numberArray.reduce((previousValue, currentValue) => {
    return Math.max(currentValue, previousValue)
  });
  
  const length = array.length;
  return {average, min, max, length} 
}

module.exports = analyzeArray;