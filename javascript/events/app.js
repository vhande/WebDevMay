var number = 1;



function clickHandler(event) {
   // event.preventDefault()
    //var number = 1; //local scope variable
    number ++;
    console.log("Click the button", number);
}

// ONCHANGE

const inputValue = document.getElementById("username");

function inputHandler(event) {
    console.log("Hello", inputValue.value);
}

inputValue.addEventListener("change", inputHandler);




//ONCLICK

const login = document.getElementById("login");

function registerClickHandler(event) {
    console.log("Hello", inputValue.value)
}

login.addEventListener("click", registerClickHandler);

// some update