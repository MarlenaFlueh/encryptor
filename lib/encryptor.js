const abc = 'abcdefghijklmnopqrstuvwxyz';

const shiftChar = (char, shift) => {
  if (abc.indexOf(char) === -1) {
    return char;
  }
  
  if (shift < 0) {
    return abc[(abc.indexOf(char) - (shift * -1) + abc.length) % abc.length];
  }

  return abc[(abc.indexOf(char) + shift) % abc.length];
};

// shiftByValue(message: string, shift: number): string -> shifts a whole message
const shiftByValue = (message, shift) => message.split('').reduce((result, char) => result += shiftChar(char, shift), '');

// rot13(message: string): string -> shifts message by 13
const rot13 = message => shiftByValue(message, 13);

// vigenere(message: string, key: string): string -> shifts a message by another string
const vigenereEncode = (message, key) => message.split('').reduce((result, char, i) => result += shiftChar(char, abc.indexOf(key[i % key.length])), '');


module.exports = {
  shiftChar,
  shiftByValue,
  rot13,
  vigenereEncode,
};
