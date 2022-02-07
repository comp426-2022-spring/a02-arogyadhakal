import { coinFlip } from "./modules/coin.mjs";

const myArgs = process.argv.slice(2);
let number = ""
const result = {
    call: '',
    flip: '',
    result: ''
  };
let compare = coinFlip()
let call = myArgs[0].slice(-5)
result.call = call
result.flip = compare
call == compare ? result.result = 'win' : result.result = 'lose'
console.log(result)
