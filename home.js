console.log('Hello'); 
// Alert's alert people. 
//console.log is like the print of Javascript. 

//Variables 
var b = ' smoothie'; 
console.log(b); 

var someNumber = 45; 
console.log(someNumber); 



// A prompt is like a question. Kind of. 
//You can store it in a variable to make it actually do something. 
//var age = prompt('What is your age? '); 
// document.getElementById basically changes text from HTML file or files.
// It can also add things into your text like in this example of what I just did.  
//document.getElementById('someText').innerHTML ='You are ' + age + " Years Old. ";  


//Numbers 

var num1 = 10; 
// Increasing the number. 
 //num1++;  

// Decreasing the number. 
 //num1--; 

//Multiplying,dividing and remainders. 
console.log(num1 / 5 ); 
console.log(num1); 

// How to increase by any number 

num1 += 10; 
console.log(num1); 

/* Functions 
1: Create the function: function something() {

} 
2:  Call the function: something();  
*/ 
//Create 
function fun() { 
    console.log('This is a function'); 
} 

// Call 
fun(); 

/* Creating a function that takes a name 
and say followed by your name 

Example: 

Name:"Mark Antao." 
Return: "Hello Mark Antao" 
*/ 


// This is how you would program it. 

function greeting(yourName) { 

    var result = 'Hello ' + yourName;  
    console.log(result)   
} 

//var name = prompt('What is your name? '); 
//greeting(name); 

// How do arguments work in functions. 
// How to add 2 numbers together in a function. 

function sumNumbers(num1, num2) {
    var result = num1 + num2; 
    console.log(num1 + num2); 
} 


sumNumbers(3, 5); 

/* While Loops 

var num = 0; 

while (num <100) { 
    num += 1; 
    console.log(num); 
} 

*/ 


// For loops. 
//You can say var or let. 
//This is how you would do it. 
/*
for (let num = 0; num <= 100; num++) { 
    console.log(num); 
} 
*/ 

// The for loop above is the same as the while loop above. 

//Data types. 
/*
var yourAge = 18; //Number. 
let yourName = 'Bob'; //string 
let name = {first: 'Jane', last: 'Doe'}; //Object. 
let truth = false; //Boolean True or False. 
let groceries = ['apple', 'banana', 'orange', 'Strawberry']; //Array 
let random; //Undefined. 
let  nothing = null; //Value null 
*/
// These are the different types of Data Types in Javascript. 


// Strings. 
let fruit = 'banana, apple, orange, strawberry. ';
let moreFruits = 'banana\apple';           
console.log(moreFruits); 

//This one finds the length of the stuff. 
console.log(fruit.length); 
// This one checks and shows stuff from stuff like in the example. 
console.log(fruit.indexOf('nan')); 
// This one slices stuff. 
console.log(fruit.slice(2, 4)); 
//This replaces things with things like in this example.  
console.log(fruit.replace('ban', '123')); 
// This makes everything upper case  
console.log(fruit.toUpperCase()); 
// This makes everthing lowercase.  
console.log(fruit.toLowerCase()); 
// This shows the character of sometihng. 
console.log(fruit.charAt(2)); 
// This is the same as the one above. 
console.log(fruit[2]); 
console.log(fruit.split(',')); // Split by a comma.  
console.log(fruit.split('')); // Split by character. 





// Array. 
// These are two ways to create an array. 
let fruits = ['banana', 'apple', 'orange', 'strawberry']; 

fruits = new Array('banana', 'apple', 'orange', 'strawberry'); 

console.log(fruits[1]); // Accessing value at index. 

fruits[0] = 'Pear';  
console.log(fruits); 

for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]); 
} 

// Array common methods. 
// Taking and array and turning into a string. 
console.log('To string ', fruits.toString()); 
// Joing arrays together by sometihng.  
console.log(fruits.join(' - ')); 
// Pop an item. 
// Pop takes the last element.  
console.log(fruits.pop(), fruits); 
// Adds an item. 
console.log(fruits.push('blackberrries'), fruits);  
console.log(fruits[4]); 
fruits[fruits.length] = 'new fruit'; 
console.log(fruits) 
fruits.shift(); // This will remove the first element from an array  
console.log(fruits) 
fruits.unshift('Kiwi'); // This will add a frist element to an array.  
console.log(fruits) 

// Creating a vegatable array. 
let vegetables = ['Asparagus', 'Carrot', 'Broccoli', 'Cauliflower']; 
// Joining the vegatable array with the fruits array. 
let allGroceries = fruits.concat(vegetables); 
console.log(allGroceries); 
// Slicing an array. 
console.log(allGroceries.slice(1, 4)); 
// Reversing the array. 
console.log(allGroceries.reverse()); 

// Sorting an array. 
console.log(allGroceries.sort()); 

let someNumbers = [5, 10, 2, 25, 3, 255, 1 ,2, 5, 334, 321, 2]; 
console.log(someNumbers.sort(function(a, b) {return a-b})); //This is sorting in ascending order. 
console.log(someNumbers.sort(function(a, b) {return b-a})); // This is sorting in descending order. 

// Looping through and adding things. 
let emptyArray = new Array(); 
for (let num = 0; num <= 10; num++) { 
    emptyArray.push(num); 
} 
console.log(emptyArray); 

// Objects in Javascript.  

let student = {
    first: 'Mark', 
    last: 'Antao', 
    age:13, 
    height:5_2, // Put in the comma if you are going ot add somehting new.    
    studentInfo: function (){
       return this.first + '\n' + this.last + '\n' + this.age;   // '\n' = new line.  
    }
};  

// This will print out the first name.   
//console.log(student.first);   
// This will print out the last name.  
//console.log(student.last);  
//student.first = 'NotMark' // Changing the value
//console.log(student.first); 
student.age++; 
console.log(student.age); 
console.log(student.studentInfo());; 

// Conditionals, Contro flows if, else 
// 18-35 is my my target demographic 

// && = and 
// || or 
// let won't work with prompts. So that is why you should use var instead.  

//var age = prompt('What is your age?');   

var age = 45;  

if ((age >= 18) && (age <= 35)) { 
status = 'target demo' 
}  
else { 
    status = 'Not my audience'; 
} 
console.log(status); 

// This is how you would do it if you wanted it to print a staemnt on the screen. 
/*

var age = prompt('What is your age?');   

if ((age >= 18) && (age <= 35)) { 
status = 'target demo' 
}  
else { 
    status = 'Not my audience'; 
} 
console.log(status); 


document.getElementById('someText').innerHTML ='You are ' + status;; 

*/ 

// Switch statements 
// differenciate between weekday and weekend 
// Day 0 --> Sunday --> Weekend 
// Day 1 --> Monday --> Weekday 
// Day 2 --> Tuesday --> Weekday 
// Day 3 --> Wednesday --> Weekday 
// Day 4 --> Thursday --> Weekday 
//Day 5 --> Friday --> Weekend in this example. 
// Day 6 --> Saturday --Weekend

// Switch changes the cases for 0, 5 and 6. 
switch (6) {  
    case 0:
        text = 'Weekend'; 
        break; // Put the break in to break out. 
    case 5:
        text = 'Weekend'; 
        break; // Same for this one. 
    case 6: 
        text = 'Weekend'; 
        break; // Same break as well for this one and the one above and the other one above. 
    default: 
        text = 'Weekday' 
} 

console.log(text); 

 
















