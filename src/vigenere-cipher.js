
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  constructor(value) {
    if (value === false) {
      this.reverse = true;
    }
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let plainText = message.toUpperCase().match(/[A-Z]/g);
    if (plainText === null) {
      if (this.reverse) {
        return message.split('').reverse().join('');
      }
      return message;
    }
    key = key.repeat(Math.ceil(plainText.length / key.length)).slice(0, plainText.length).toUpperCase();
    let cipherText = [];

    for (let i = 0; i < plainText.length; i++) {
      let index = this.alphabet.indexOf(plainText[i]) + this.alphabet.indexOf(key[i]);
      if (index > 25) {
        index -= 26;
      }
      cipherText.push(this.alphabet[index]);
    }

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i].toUpperCase())) {
        cipherText.splice(i, 0, message[i]);
      }
    }

    if (this.reverse) {
      cipherText.reverse().join('');
    }
    return cipherText.join('');
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let cipherText = message.match(/[A-Z]/g);
    if (cipherText === null) {
      if (this.reverse) {
        return message.split('').reverse().join('');
      }
      return message;
    }
    key = key.repeat(Math.ceil(cipherText.length / key.length)).slice(0, cipherText.length).toUpperCase();
    let plainText = [];

    for (let i = 0; i < cipherText.length; i++) {
      let index = this.alphabet.indexOf(cipherText[i]) - this.alphabet.indexOf(key[i]);
      if (index < 0) {
        index += 26;
      }
      plainText.push(this.alphabet[index]);
    }
    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i])) {
        plainText.splice(i, 0, message[i]);
      }
    }
    if (this.reverse) {
      plainText.reverse().join('');
    }
    return plainText.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
