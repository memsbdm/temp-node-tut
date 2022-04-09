const {readFile, writeFile} = require('fs')
// same as : 
// const fs = require('fs') then fs.xxx
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err)
        return;
    const first = result
    readFile('./content/second.txt' ,'utf8', (err, result)=>{
        if(err)
            return;
        const second = result
        writeFile('./content/result-async.txt', `Here is the result: ${first} ${second}`,(err, result)=>{
            if(err)
                return
            console.log('done');
        })
    })
})


console.log('starting next task');