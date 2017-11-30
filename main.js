const input = document.querySelector('input');
const p = document.querySelector('p');
const abc = 'abcdefghijklmnopqrstuvwxyz';

input.addEventListener('input', event => { 
  p.innerHTML = rot13(event.target.value);
});

const rot13 = message => {
  let key = '';

  for (let i = 0; i < message.length; i++) {
    key += abc[(abc.indexOf(message[i]) + 13) % 26];
  }

  return key; 
}
