function capitalize(string) {
  const strArray = string.split('');
  let upperChar = '';
  let newString = '';
  strArray.forEach(char => {
    if (char.match(/[A-Za-z]/) && !upperChar){
      upperChar = char.toUpperCase();
      newString += upperChar;
    }
    else newString += char;
  });
  return newString;
}
module.exports = capitalize;