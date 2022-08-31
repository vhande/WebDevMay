console.log("Hello World");
// OR operator

var n1 = 5;
var n2 = 10;
var n3 = "5";
var n4 = "10";


let result;

result = (n1 < n2) || (n3 > n4);
/*

NOT operator
true = false


*/

var isUserLoggedIn = true;
result = !isUserLoggedIn;

var isLightOn = false;
// clicked on the light switch -true
result = !isLightOn;
isLightOn= !isLightOn;
// clicked again 
result = !isLightOn;



console.log(result);