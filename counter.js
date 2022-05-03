// let counter = function (ar) {
//     return `this is what the array will return ${ar.length}`
// }
// let results = counter(['bill', 'clinton', 'ogot'])
// console.log(results)
// var fs = require('fs')
// var myFile = fs.readFileSync('readMyname.txt', 'utf-8')
// console.log(myFile)
var myFile = require('fs');
myFile.readFile('files/readMyname.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("something has happen", err)
    }
    myFile.writeFile('files/heloo.txt', data, (err) => {
        if (err) throw err
        console.log('success')
    })
})