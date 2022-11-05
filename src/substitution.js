// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


// INPUT refers to the inputted text to be encoded or decoded.
// ALPHABET refers to substitution alphabet.
// ENDCODE refers to whether you should encode or decode the message. By default it is set to true.


const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  function substitution(input, alphabet, encode = true) {
    let output = ''
    if(!alphabet ) return false;
    if(alphabet.length !== 26) return false;
    // console.log(alphabet.length);
    for(let letter in alphabet){
      let count = 0
      for(let i = 0; i < 26; i++){
        if(alphabet[letter] == alphabet[i]) count++
      }
      if(count > 1 ) return false;
    }
    // if(encode){
      let before = input.toLowerCase()
      for(let letter in before){
        if(!alphabet.includes(before[letter])) output += before[letter]
        else {
          if (encode) {
            const alphaIndex = alpha.indexOf(before[letter]);
            output += alphabet[alphaIndex];
          } else {
            const alphaIndex = alphabet.indexOf(before[letter]);
            output += alpha[alphaIndex];
          }
        }
      }
      return output
    // else{
    //   let before = input.toLowerCase()
    //   for(let letter in before){
    //     if(!alphabet.includes(before[letter])) output += before[letter]
    //     else {
    //       const alphaIndex = alphabet.indexOf(before[letter])
    //       output += alpha[alphaIndex]
    //     }
    //   }
    //   return output
    // }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
