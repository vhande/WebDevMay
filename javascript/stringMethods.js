// Built in string methods

const myText = "lorem ipsum dolor sit amet ipsum";

// length

result = myText.length;
result = myText[0];
result = myText[myText.length-1];


// charAt()
result = myText.charAt(6)

// concat() method

var firstname = "John";
var lastname = "Doe";
result = firstname.concat(" ",lastname);
//result = "1234" . concat("5678")


// returns true or false

result = myText.endsWith("amet");



result = myText.startsWith("lorem");


//if a string contains

result = myText.includes("hande");

// reurns the index of a value

result = myText.indexOf("ipsum");

result = myText.replace("amet", "hande");

result = myText.replaceAll("ipsum", "hande");


// split method (str to array list)

result = myText.split(" ");

var names = "Hande,Ezgi,Isil,Nilsu"
result = names.split(",")

// slice method you give it an index number
result = myText.slice(12,myText.length-6);


result = myText.toUpperCase();
result = myText.toLocaleLowerCase();


// trim removes spacing start and end of a string
var myText2 = "              lorem          ipsum                ";
result = myText2.trim().slice(0,6).concat(myText2.trim().slice(myText2.length-31));



var myNewText = "lorem ipsum BELGIUM hande hande 1234567890"
result = myNewText.match(/hande/)
result = myNewText.match(/hande/g)


console.log(result);
