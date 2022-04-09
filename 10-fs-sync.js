const {readFileSync, writeFileSync} = require('fs')
// same as : 
// const fs = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'w' }
)
console.log('done');
console.log('starting next one');