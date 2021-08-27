const {readFileSync,writeFileSync} = require('fs');


const first = readFileSync('./contents/first.txt', 'utf8')
const second = readFileSync('./contents/second.txt', 'utf8')

writeFileSync('./contents/result.txt', `Here is the result : ${first}, ${second}`)

console.log(first, second);
