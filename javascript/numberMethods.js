// Number Methods


var result;

var num1 = "10";
var num2 = 10;
var num3 = "10.5";
var num4 = "10 15 20";
var num5 = "10, 15, 20";
var num6 = "9e+2";
var num7 = 10e+2; // scientific notation
var num8 = 20000.54;
var PI = 3.14159265359;

// toString()

result = num2.toString(); // returns string to number

//parseInt() method

result = parseInt(num1);  // parse the data type into integer

result = parseInt("10") + parseInt("10");  // normalde 1010 ama boyle 20

// parseFloat()

result = parseFloat(num3); // turns the data type into float

//toExponential() method for scientific numbers

result=PI.toExponential();  // it returns to a string 
result = PI.toExponential(2);  // sayinin kac basamagini tutmak istiyosun

// toFixed()

result = num8.toFixed(); // it returns to an integer but virgulden sonrasini yuvarliyo

result = Number("10");  // it converts it to a real number
result = Number(undefined); //  NaN but the type is a number
result = Number(null); // 
result = Number(true);
result = Number(false);

result = Number.MAX_VALUE;
result = Number.MIN_VALUE;
result = Number.MAX_SAFE_INTEGER;
result = Number.POSITIVE_INFINITY;  // infinity
result = Number.NaN;
result = Number.isFinite(10);  // turns to a boolean
result = Number.isFinite(Infinity);
result = Number.isFinite(NaN);
result = Number.isInteger("10");
result = Number.isInteger(10);
result = Number.isNaN(10/NaN);
result = Number.isNaN("10" / "10");
result = Number.isSafeInteger(10);

var userInput = 10;

    if (Number.isInteger(userInput)) {
     console.log("Valid Input")

 } else {
     console.log("Invalid Input")
 }




console.log(result, typeof result);