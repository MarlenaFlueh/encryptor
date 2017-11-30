const input = document.querySelector('input');
const p = document.querySelector('p');
const abc = 'abcdefghijklmnopqrstuvwxyz';

input.addEventListener('input', event => { 
  p.innerHTML = rot13(event.target.value);
});

const rot13 = message => {
  let result = '';

  for (let i = 0; i < message.length; i++) {
    if (abc.indexOf(message[i]) === -1) {
      result += message[i];
    } else {
      result += abc[(abc.indexOf(message[i]) + 13) % abc.length];
    }
  }

  return result; 
};

const vigenere = (message, key) => {
  let result = '';

  for (let i = 0; i < message.length; i++) {
    if (abc.indexOf(message[i]) === -1) {
      result += message[i];
    } else {
      const keyIndex = abc.indexOf(key[i % key.length]);
      const messageIndex = abc.indexOf(message[i]);
      result += abc[(messageIndex + keyIndex) % abc.length];
    }
  }

  return result;
};
