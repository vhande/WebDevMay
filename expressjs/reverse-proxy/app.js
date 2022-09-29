const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')
const app = express()

app.use(cors())
app.use(express.json())

//proxy server
app.use('/news', createProxyMiddleware({
    target: 'https://newsapi.org/v2/everything?q=tesla&from=2022-08-29&sortBy=publishedAt&apiKey=6d5c33c9d52c4d8aae27cb95948a6af7',
    pathRewrite: { ['/news']: '' }, //localhost:4000/news
    changeOrigin: true,
    secure: true
}))

app.use('/jsonplaceholder', createProxyMiddleware({
    target:"https://jsonplaceholder.typicode.com/",
    pathRewrite:{['/jsonplaceholder']: ''},
    changeOrigin:true,
    secure:true
}))

app.listen(4000, () => {
    console.log("Connected")
})