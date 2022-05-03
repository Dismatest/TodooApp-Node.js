const http = require('http')
const fs = require('fs')
let data = [
    {
        "name": "Bill",
        "secondName": "Ogot",
        "age": 25,
        "home": "Oyugis",
        "residennce": "Nairobi"
  },
      {
          "marital": "married",
          "fammily": 4,
          "christianity":"christian"
      }
  ]

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(__dirname + '/html/index.html', 'utf-8')
    if (req.url === "/home" || req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        myReadStream.pipe(res)
    } else if (req.url === "/api") {
        res.writeHead(200, { 'Content-Type': 'Application/json' })
        res.end(JSON.stringify(data))
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        fs.createReadStream(__dirname + '/html/404.html', 'utf-8').pipe(res)
    }
   
})
const port = 8000
server.listen(port, '127.0.0.1')
console.log(`You are listening on port: ${port}`)