const abc = 'abcdefghijklmnopqrstuvwxyz';

export const shiftChar = (char, shift) => {
  if (abc.indexOf(char) === -1) {
    return char;
  }
  
  return abc[(abc.indexOf(char) + shift) % abc.length];
};

// shiftByValue(message: string, shift: number): string -> shifts a whole message
export const shiftByValue = (message, shift) => message.split('').reduce((result, char) => result += shiftChar(char, shift), '');

// rot13(message: string): string -> shifts message by 13
export const rot13 = message => shiftByValue(message, 13);

// vigenere(message: string, key: string): string -> shifts a message by another string
export const vigenere = (message, key) => message.split('').reduce((result, char, i) => result += shiftChar(char, abc.indexOf(key[i % key.length])), '');
