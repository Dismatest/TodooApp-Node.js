const fs = require('fs')

const myReadStream = fs.createReadStream(__dirname + '/files/heloo.txt', 'utf-8')
const myWriteStream = fs.createWriteStream(__dirname + '/files/hello.txt')

myReadStream.pipe(myWriteStream)