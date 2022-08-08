const searchInput = document.querySelector('.searchInput')
const [wikiSearch, wikiSearchRandom] = document.querySelectorAll(".btn")
const result = document.querySelector('.results')

async function searchData(keyword,limit) {
    let res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=${limit}&srsearch=${keyword}`)
    let data = await res.json() // retrive the data from response
    return data
}

const g = t => document.createElement(t)

function htmlTemplateGenerator(obj) {
    const li = g('li')
    li.className = "list-group-item d-flex justify-content-between align-items-start"
    const parentDiv = g('div')
    const textofParentDiv = document.createTextNode(obj.snippet)
    
    parentDiv.className = 'ms-2 me-auto'
    const childDiv = g('div')
    childDiv.className='fw-bold'
    const textofChildDiv = document.createTextNode(obj.title)
    childDiv.append(textofChildDiv)
    
    parentDiv.append(childDiv)
    parentDiv.append(textofParentDiv)
    li.append(parentDiv)
    return result.append(li)
}

wikiSearch.addEventListener('click', (e) => {
    result.innerHTML = " " // her aramadan once listeyi temizle
    searchData(searchInput.value,30)
    .then(data => { 
        data.query.search.forEach(obj=>{
            htmlTemplateGenerator(obj)
        })
        console.log(obj)
    }).catch(err=> {
        alert("No data")
    })
   
    console.log("hello world", searchInput.value)
})