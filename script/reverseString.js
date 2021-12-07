function reverseString(string) {
  const strArray = string.split('').reverse();
  let newString = '';
  strArray.forEach((char, i) => {
    if (strArray.indexOf(' ') !== -1){
      if (i === 0){
        newString += char.toUpperCase();
      }
      else if (i === strArray.length - 1){
        newString += char.toLowerCase();
      }
      else newString += char;
    }
    else newString += char;
  });
  return newString;
}

module.exports = reverseString