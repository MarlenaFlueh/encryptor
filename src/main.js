const { rot13 } = require('../lib/encryptor');

const input = document.querySelector('input');
const p = document.querySelector('p');

input.addEventListener('input', event => { 
  p.innerHTML = rot13(event.target.value);
});
