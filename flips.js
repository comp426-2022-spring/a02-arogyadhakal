import { coinFlip, coinFlips, countFlips } from "./modules/coin.mjs";

const myArgs = process.argv.slice(2);
let number = ""
if (myArgs[0] == null){
    let first_number = coinFlips(1)
    let first_output = countFlips(first_number)
    console.log(first_number)
    console.log(first_output)
}
else{
    for (let i = 0; i<myArgs[0].length; i++){
        if (!isNaN(myArgs[0][i])){
            number += myArgs[0][i]
        }
    }
    let output = coinFlips(number)
    let second_output = countFlips(output)
    console.log(output)
    console.log(second_output)
}
// let output = coinFlips[myArgs[0]]
// console.log(output, countFlips(output))
