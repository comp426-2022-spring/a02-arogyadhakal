import { coinFlip, coinFlips, countFlips } from "./modules/coin.mjs";

const myArgs = process.argv.slice(2);
let number = ""
for (let i = 0; i<myArgs[0].length; i++){
    if (!isNaN(myArgs[0][i])){
        number += myArgs[0][i]
    }
}
let output = coinFlips(number)
let second_output = countFlips(output)
console.log(output, second_output)
// let output = coinFlips[myArgs[0]]
// console.log(output, countFlips(output))
