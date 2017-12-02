const chai = require('chai');
const { shiftChar, shiftByValue, rot13, vigenere } = require('../lib/encryptor');
const expect = chai.expect;

describe('shiftChar', () => {
  it('should shift a char forward', () => {
    expect(shiftChar('a', 1)).to.be.equal('b');
    expect(shiftChar('z', 1)).to.be.equal('a');
    expect(shiftChar('a', 2)).to.be.equal('c');
  });

  it('should shift a char backward', () => {
    expect(shiftChar('b', -1)).to.be.equal('a');
    expect(shiftChar('a', -1)).to.be.equal('z');
    expect(shiftChar('a', -2)).to.be.equal('y');
  });

  it('should return a the letter if it does not exist in the alphabet', () => {
    expect(shiftChar(' ', 1)).to.be.equal(' ');
    expect(shiftChar('/', 1)).to.be.equal('/');
  });
});
