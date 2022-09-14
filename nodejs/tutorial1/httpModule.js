const http = require('http')
const fetch = require('node-fetch')

//create server
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'})
    // res.write(
    //     `<h1>Hello World</h1>
    //     <script>console.log("Hello")</script>`)
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res=>res.json())
    .then(data => {
        if (req.rawHeaders[3].includes("curl"))
        {
            res.write(data.name + "Only visible in terminal")
        } else {
            res.write(`<h1>${data.name}</h1>`)
        }
        
        // res.write(`<h1>${data.name}</h1>`)
        res.end()
    })
    
}).listen(8080,()=>{
    console.log('Server is running... Port number is 8080')
}).on('connection',()=> {
    console.log("New connection")
})