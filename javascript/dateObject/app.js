
let result;
let lead = document.querySelector('.lead')
let date = new Date();


// full year
result=date.getFullYear();
lead.innerHTML = result;


// get month
lead.innerHTML = date.getMonth(); // it returns the number of the month

// toLocaleString
//result = date.toLocaleString();
lead.innerHTML = date.toLocaleString('nl-BE', {timeZone:'Europe/Brussels', day:'2-digit', month:'long', year:'numeric'});

var hours, minutes, seconds;
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();


lead.innerHTML = `${hours}:${minutes}:${seconds}`;  // you have to refresh the page so that it updates

// window.setInterval(updateTime, 1000);

// function updateTime () {
//     let date2 = new Date();
//     var hours, minutes, seconds;
//     hours = date2.getHours();
//     minutes = date2.getMinutes();
//     seconds = date2.getSeconds();
//     lead.innerHTML = `${hours}:${minutes}:${seconds}`;
// }


var daysInNederlands = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag","Zaterdag"] // but to make it turn to a string, you use an array with days and it gets the name of the day according to the day
lead.innerHTML = daysInNederlands[date.getDay()]; // returns to number

result = date.setFullYear(2021,01,01)  //UNIX timestamp

console.log(result);


