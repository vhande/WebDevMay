        var username = "root";
        var username = "joe"; // redeclere variable (create another space in your memory)
        username = "Joe"; // it'll use the same memory space and change it.
        console.log(username);

        const company = "Google";
        console.log(company);

        let website = "google.com";
        website = "apple.com"
        console.log(website);

        console.log(user);
        var user = "root";
        
        /* first you should declare your variable, or you have to access it in wrong scope (variable exist but you have no acess to print its variable) */

        /* VAR keyword > can be redeclared

        CONST keyword > you can use it only once, you cannot redeclare it, you cannot update it.

        LET keyword > you cannot redeclare it but you can UPDATE IT
        
        
        */


        var number1 = 10;
        var number2 = 20;
        var total = number1 + number2;  // 10 + 20 = 30
        var total = 10 + "20";
        var country = "Bru" + "ssel";
        var country = "Brussel's beer" // 'Brussel \'s beer' back slash to escape
        console.log(country);
        console.log(total);

        // document.getElementById("message").innerText = "Hello friend";
        // document.getElementById("container").innerHTML = "<h1>Container</h1>";

        // BMI = weight / (height * height)
        var weight = 65; 
        var height = 1.85;
        var BMI = weight / (height * height);
        console.log(BMI);


        // bruto salary = 3000 euro
        // tax 21%

        var bruto = 3000;
        var netto = bruto * 0.79; 
        console.log(netto);

        /* operators 

        = assign operator
        
        */

        let result;

        result = 7 + 3; //addition operator
        result = "a" + "b";
        result = 7 - 3 //subtraction operator
        result += 2; // result equals to result + 2 
        result -=1; // result = result - 1
        result = 5 * 5;
        result *= 2;
        result = 50 / 2;
        result /= 5;

        // increase and decrease
        result++;
        result++;
        ++result; // you can use it left or right
        
        result--;
        --result;

        console.log(result);

        var number1 = 50;
        number1 += 10;
        console.log(number1);

        // const kullansaydin you cannot get the result
        
        let firstname = "John";
        let lastname = "Doe";
        result = firstname + " " + lastname; // string + space
        console.log(result + " 🙃 "); // use emoji as string

        // comparasion of variables 

        var n1 = 5;
        var n2 = 5;
        var n3 = 6;
        var n4 = "5";

        result = n1 == n2;
        result = n1 == n3;
        result = n1 == n4; // can compare int and string

        // equal to operator == ===

        result = n1 === n4; //data type ayni olmadigi icin false veriyor

        result = "spacex" === "spacex";
        result = "Facebook" === "facebook"; // false - case sensitive
        result = "🙃" == "🙃";
        result = "🙃" == " 🙃"; // false bcs extra space

        var _x = 5;
        var $x = 5;
        var X = 5;

        
        // NOT equal != !==

        result = n1 != n2;
        result = n1 != n4;
        result = "🙃" != "abc";
        result = n1 !== n4; // not same data type so true 

        var x1; // undefined
        var x2; // undefined 

        result = x1 === x2; // undefined === undefined


        //greater than >

        result = n1 > n2;
        result = n3 > n1;
        result = n3 > n4;

        // less than <

        result = n1 < n2;
        result = n3 < n4;

        // greater than or equal to operator >=, >== double equal not possible 

        result = n1 >= n1;

        // less than or equal

        result = n1 <= n4;
        result = n1 <= n3;

        // result= n1 <= n4 ? "true": "false"; If true print true, if false then print the second part. 

        result = n1 >= n3 ? "Correct": "Incorrect";

        console.log(result + " 🙃 ");



        // bi variable'i declare edebilirsin ama biseye assign etmezsen undefined


        // Jack if jack less than 18 No alcohol greater than 17 than allowed to drink beer 

        var studentAge = 14;
        var studentName = "Jack";
        var studentMoney = 3;

        result = studentAge <= 18 ? `${studentName} is not allowed to drink alcohol`: studentName + "is allowed to drink alcohol";

        var myRule = n1 >= n3;
        var mySecondRule = n4 <= n1;
        
        result = myRule && mySecondRule;



        var studentRule1 = studentAge >= 18;
        var studentRule2 = studentMoney >= 1;
        var getResult = studentRule1 && studentRule2 ? "He can have a drink": "He cannot have a drink";
        console.log(getResult);

        // result = studentRule1 ? (studentRule2) ? "Yes he can have drink" //true : "No he need money" : "No he need age";


        result = 5 >= "5" ? (5==="5") ? "Yes they are equal" : "No data type is different" : "No"; 

        // after ? First part is true message : Second part is the false part of second part : Third part is false message


        

        console.log(result + " 🙃 ");



        
        


        // Logical Operators && both should be true or false
