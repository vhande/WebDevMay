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

// wikiSearch.addEventListener('click', (e) => {
//     result.innerHTML = " " // her aramadan once listeyi temizle
//     searchData(searchInput.value,30)
//     .then(data => { 
//         data.query.search.forEach(obj=>{
//             htmlTemplateGenerator(obj)
//         })
//         console.log(obj)
//     }).catch(err=> {
//         alert("No data")
//     })
   
//     console.log("hello world", searchInput.value)
// })

// HTML events 
// mouse events

// mouseover 
// e.target returns the current element
result.addEventListener('mouseover', (e) => {
    console.log('Mouse Over',e.target)
   if(e.target.classList.contains('bg-dark')) {
     e.target.classList.remove('bg-dark')
    e.target.classList.add('bg-danger')
   }
})

result.addEventListener('mouseout', (e) => {
    console.log('Mouse Out Event',e.target)
    e.target.classList.add('bg-dark')
    e.target.classList.add('text-light')
})

//mousedown click and drag
result.addEventListener('mousedown', (e) => {
    console.log('Mousedown event')
})

//mouseup tiklamayi birakinca calisiyor
result.addEventListener('mouseup', (e) => {
    console.log('Mouseup event')
})

// //keydown ne zaman klavyede bir harfe basinca calisiyo.key yazdigin harfi gosteriyor
// searchInput.addEventListener('keydown', (e)=>{
//     console.log("Key Down Event", e.key)
// })

//keyup klavyede herhangi biseye basmayi birakinca calisiyor
// searchInput.addEventListener('keyup', (e) =>
// {
//     console.log("Keyup event", e.key)
// })

//keypress event works only for numbers / letters / special characters
// searchInput.addEventListener('keypress', (e) =>
// {
//     console.log("Keypress event", e.key)
// })

// change event
// searchInput.addEventListener('change', (e) =>
// {
//     console.log("change event", e.target.value)
// })

//focus event when you click somewhere to do something
searchInput.addEventListener('focus', (e) =>
{
    console.log("Focus event", e.target.value)
    e.target.classList.add('bg-dark')
    e.target.classList.add('bg-light')
})

searchInput.addEventListener('blur', (e) =>
{
    console.log("Blur event", e.target.value)
    if (e.target.classList.contains('bg-dark')) {
        e.target.classList.remove('text-light')
        e.target.classList.add('bg-light')
        e.target.classList.add('text-dark')
    }
   
})

//sayfa tumuyle yuklanince geliyor
document.addEventListener('DOMContentLoaded', () => {
    searchData('php',20)
    .then(data => { data.query.search.forEach(obj=>{
                    htmlTemplateGenerator(obj)
                    console.log(data, 'DOMContentLoadedevent')})
                 })
   
    })
