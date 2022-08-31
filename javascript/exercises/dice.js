var result = document.getElementById('result');
var scoreHolder = document.getElementById('scoreHolder');
var button = document.getElementById('button')
var score = 0;



function write () {
var dice1 = Math.round(Math.random() * 5 +1)
var dice2 = Math.round(Math.random() * 5 +1)
result.innerHTML = `${dice1} ${dice2}`

if (dice1 == dice2) {
    score += 1
} 
scoreHolder.innerHTML = `Score: ${score}`;
}

button.addEventListener ('click', write)