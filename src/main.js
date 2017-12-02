import { rot13 } from '../lib/encryptor';

const input = document.querySelector('input');
const p = document.querySelector('p');

input.addEventListener('input', event => { 
  p.innerHTML = rot13(event.target.value);
});
