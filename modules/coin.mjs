export { coinFlip, coinFlips, countFlips, flipACoin }

/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  let number = Math.random();
  let output = number > .5 ? "heads" : "tails"
  return output

}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  let result = []
  for (let i = 0; i < flips; i++){
      result[i] = coinFlip()
  }
  return result
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  let output = {}
  if (array.length == 1 && array[0] == 'heads'){
    output = {
      heads: 1
    };

  }
  else if (array.length == 1 && array[0] == 'tails'){
    output = {
      tails: 1
    };
  }
  else{
    output = {
      tails: 0,
      heads: 0
    };
    for (let i = 0; i < array.length; i++){
      array[i] == 'heads' ? output.heads += 1 : output.tails += 1
    }
  }

  return output;

}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  let flip = coinFlip()
  let result = {
    call: call,
    flip: flip,
    result: ""
  }
  this.flip == this.call ? this.result = "win" : this.result = "lose"

}


/** Export 
 * 
 * Export all of your named functions
*/
