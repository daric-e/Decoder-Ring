// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// INPUT refers to the inputted text to be encoded or decoded.
// SHIFT refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e., A becomes D) whereas a negative number means shifting to the left (i.e., M becomes K).
// ENCODE refers to whether you should encode or decode the message. By default it is set to true.

const caesarModule = (function () {
  // you can add any code you want within this function scope
  // const alpha = "abcdefghijklmnopqrstuvwxyz"

//If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || Math.abs(shift) > 25) return false;
    // if (encode) {
      let lowerCase = input.toLowerCase();
      const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
      let output = '';
      for(let i = 0; i < lowerCase.length; i++) {
        let letter = lowerCase[i];
        if(/\W/gm.test(letter)) {
          output += letter;
          continue;
        }
        let currentIndex = alpha.indexOf(letter);
        let newIndex;
        if (encode) {
          newIndex = currentIndex + shift;
        } else {
          newIndex = currentIndex - shift;
        }

        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = newIndex + 26; 
        output += alpha[newIndex];
      }
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

