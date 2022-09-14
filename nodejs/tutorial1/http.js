// import http module
const http = require('http')

// create server 
const server = http.createServer((req,res)=>{
    // console.log(req.url)
    // console.log(req.method)
    // console.log(req.httpVersion)
    // res.writeHead(200,{'Content-Type':"text/html"})
    // res.write(`
    // <h1>Hello World</h1>
    // `)
    // res.end()
    if (req.url === "/") {
        res.write("Hello World - Homepage")
        res.end()
    } else if (req.url === '/login') {
        res.write("Hello World, Login Page")
        res.end()
    }
})

//listen on port 8080
server.listen(8080, ()=> {
    console.log("Web server is running on 8080")
})

//print out a message when a new connection is made
server.on('connection',(socket)=>{
    console.log("Someone connected")
    socket.on('data', (data) => {
        console.log(data.toString())
    })
})


//nc localhost 8080 
//curl -X POST http://localhost:8080