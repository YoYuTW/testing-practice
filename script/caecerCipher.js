function caecerCipher(string,shift) {
  const strArray = string.split('');
  const codeArray = strArray.map(char => char.charCodeAt(0));
  let newString = '';
  codeArray.forEach(code => {
    if (code >= 65 && code <= 90){ 
      code += (shift % 26);
      code < 65 ? code += 26 : null;
      code > 90 ? code -= 26 : null;
    }
    if (code >= 97 && code <= 122){
      code += (shift % 26);
      code < 97 ? code += 26 : null;
      code > 122 ? code -= 26 : null;
    }    
    newString += String.fromCharCode(code);
  });
  return newString;
}

module.exports = caecerCipher;