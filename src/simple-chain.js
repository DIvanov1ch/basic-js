const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.value.length;
  },
  addLink(value) {
    if (!this.hasOwnProperty('value')) {
      this.value = [];
    }
    this.value.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number'
      || position <= 0
      || position > this.getLength()) {
      delete this['value'];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.value.splice((position - 1), 1);
    return this;
  },
  reverseChain() {
    if (!this.hasOwnProperty('value')) {
      this.value = [];
    }
    this.value.reverse();
    return this;
  },
  finishChain() {
    let finishValue = this.value.join('~~');
    delete this['value'];
    return finishValue;
  }
};

module.exports = {
  chainMaker
};