// 26f57d71e1654423b8778e3db85f898e

var api_key = '26f57d71e1654423b8778e3db85f898e'
var baseURL = 'https://newsapi.org/v2'
var resultsElement=document.querySelector('.results')
var modalTitle = document.querySelector('.modal-title')
var newsImage = document.querySelector('.news-image')
var publishedAt = document.querySelector('.publishedAt')
var content = document.querySelector('.content')
// fetch(`${baseURL}/everything?sortBy=publishedAt&q=javascript&language=nl`, {
//     headers: {
//         'x-api-key':api_key
//     }
// })
// .then(res=>res.json())
// .then(data=> {
//     console.log(data)
//     data.articles.forEach(news => {
//         console.log(news.title)
//     }) }) 


async function getAllNews() {
    let res = await fetch(`${baseURL}/everything?sortBy=publishedAt&q=javascript&language=nl`, {
        headers: {
            'x-api-key':api_key
        }
    })
    return res.json()
}

// let news = new Promise((resolve,reject) => {
//         fetch(`${baseURL}/everything?sortBy=publishedAt&q=javascript&language=nl`, {
//             headers: {
//                 'x-api-key':api_key
//             }
//         })
//         .then(res=>res.json())
//         .then(data=>{resolve(data)
//         console.log(data)})
//     })

function getDetail(news) {
    modalTitle.innerHTML = news.title
    newsImage.src = news.urlToImage
    publishedAt.innerHTML = news.publishedAt
    content.innerHTML = news.content
}

getAllNews()
.then(result=> {
    console.log(result)
    result.articles.map((news,index)=> {
        console.log(news.title)
        let newsLink = `<a href="${news.url}" data-bs-toggle="modal" data-bs-target="#staticBackdrop" target="_blank" data-id="${index}">${news.title}</a></br>`
        console.log(newsLink)
        resultsElement.innerHTML += newsLink
    })

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', e=> 
        // console.log(e.target.getAttribute('data-id')))
        getDetail(result.articles[e.target.getAttribute('data-id')]))
        
    });

})
