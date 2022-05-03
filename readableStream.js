
const fs = require('fs')

const myReadableStreem = fs.createReadStream(__dirname + 'files/heloo.txt', 'utf-8')
const myWriteStream = fs.createWriteStream(__dirname + 'files/hello.txt')
myReadableStreem.on('data', (chunk) => {
    console.log(chunk)
    myWriteStream.write(chunk, (err) => {
        if (err)
            console.log(Error, err)
    })
})