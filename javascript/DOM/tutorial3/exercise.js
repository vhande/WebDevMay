const g = t => document.createElement(t);

const randomImage = g('img')
randomImage.src = 'https://picsum.photos/200'
randomImage.className="img-fluid"
randomImage.setAttribute('alt','Random Image')

const container = g('div')
container.className="container";
const row = g('div')
row.className="row justify-content-center align-items-center text-light";
// column-1
const col1 = g('div')
col1.innerText = 'Text'

// const col1Text = document.createTextNode('Col 1')
// col1.appendChild(col1Text)

col1.className="col-md-4 bg-primary p-5"
// column-2
const col2 = g('div')
col2.className="col-md-4 bg-warning p-5"
col2.append("Some random text")
// column-3
const col3 = g('div')
col3.appendChild(randomImage)
col3.className="col-md-4 bg-danger p-5"

row.append(col1)
row.append(col2)
row.append(col3)
container.append(row)
document.body.append(container)

/* <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */

const table = g('table')
table.className = 'table'

const thead = g('thead')
const tr = g('tr')

const th1 = g('th')
th1.innerText = "#"
th1.setAttribute('scope', 'col')

const th2 = g('th')
th2.innerText = "First"
th2.setAttribute('scope', 'col')

const th3 = g('th')
th3.innerText = "Second"
th3.setAttribute('scope', 'col')

const th4 = g('th')
th4.innerText = "Last"
th4.setAttribute('scope', 'col')

const tbody = g('tbody')
const trbody = g('tr')

const thbody = g('th')
thbody.scope ="row"
thbody.innerText = "1"

const td1 = g('th')
td1.append("Joe")
const td2 = g('th')
td2.append("Jason")
const td3 = g('th')
td3.append("James")


tr.append(th1,th2,th3,th4)
thead.append(tr)
table.append(thead)

trbody.append(thbody,td1,td2,td3)
tbody.append(trbody)
table.append(tbody)

document.body.append(table)
console.log(table, thead)

/* <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="https://picsum.photos/200" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div> */


const carddiv = g('div')
carddiv.className = "card"
carddiv.setAttribute("style", "width: 18rem;")
const cardimg = g('img')
cardimg.className = "card-img-top"
cardimg.src = "https://picsum.photos/200" 
cardimg.setAttribute('alt','Card image cap')
const cardbody = g('div')
cardbody.className = "card-body"
const cardh5 = g('h5')
cardh5.className ="card-title"
cardh5.append("Card Title")
const cardp = g('cardp')
cardp.className = "card-text"
cardp.innerText = "Some quick example text to build on the card title and make up the bulk of the card's content."
const carda = g('carda')
carda.className = "btn btn-primary"
carda.append("Go Somewhere")

cardbody.append(cardh5, cardp, carda)
carddiv.append(cardimg,cardbody)
document.body.append(carddiv)

