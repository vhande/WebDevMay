const firstColEl = document.querySelector('.first')
const parentRowContainer = document.querySelector('.columns')

//const nextSiblingEl = document.firstColEl.nextElementSibling

// parentRowContainer.firstElementChild.nextElementSibling
// parentRowContainer.children[0].nextElementSibling
// parentRowContainer.lastElementChild.previousElementSibling

// if an element doesn't exist -> result is null.

//parentRowContainer.children[1].insertBefore()


const g = t => document.createElement(t) // function to create elemenet

const divCol = g('div') 
divCol.className = "col md-3 bg-danger p-5"
parentRowContainer.insertBefore(divCol, parentRowContainer.children[1])
const divCol2 = g('div')
divCol2.className = "col md-3 bg-dark p-5"
parentRowContainer.insertAdjacentElement('afterbegin',divCol2)
parentRowContainer. insertAdjacentElement('beforeend',divCol2)

//append method
parentRowContainer.append(divCol)
parentRowContainer.append(divCol2)