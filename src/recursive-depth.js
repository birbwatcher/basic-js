const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  constructor(array) {
    this.array = array;
    this.counter = 1;
  }

  calculateDepth() {
      for (i=0;i<this.length;i++) {
        if (Array.isArray(this.array[i])) {
          this.counter++;
          this.array = this.array.flat(1);
          this.calculateDepth(this.array);
        }
      }
      return this.counter;
    }
  }

const depthCalc = new DepthCalculator();

module.exports = {
  DepthCalculator
};
