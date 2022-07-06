// Variable Creation
// keyword variableName = value;
// Keywords: let, var, const
// Generic variable declaration keywords
// let - can be reassigned but not redeclared
// var - can be reassigned and redeclared
// const - cannot be reasigned or redeclared
let instructorname = "Davis";
console.log(instructorname);
instructorname = "Gavin"; // reassignment is allowed for let variables
console.log(instructorname);
instructorname = 15;
console.log(instructorname);

const companyName = "WCCI";
// companyName = "WeCanCodeIT";  // this is not allowed, result is error

// Operators
// math operators, logic operators, assignment operators, increment operators, etc.
let formattedName = instructorname + companyName;
let num = 0;
num++;
num += 5; // num = 6;
console.log(num);
console.log("Hello!");

//Conditionals
// if(condition){code to run} else if...
if(false){
    console.log(false);
}
else if(true){
    console.log(true);
}
else{

}


switch(num){
    case 6:
        console.log("num is 6!");
        break;
        default:
            break;
}

let vacation = true ? "vacay!" : "not vacation";

// Loops
// snytax? same MINUS foreach
// let i instead of int i
for(let i = 0; i < 5; i++){
    console.log(i);
}

let j = 0;
while(j < 5){
    console.log(j);
    j++;
}

let k = 0;
do{
    console.log(k);
    k++;
}while(false);
// Collections
// one main type of collection: array
// BUT our arrays in JS change length, and can have values of any type
let arrayExample = ["davis", "gavin", "xavier", true, 15, ["miguel", "dina", "aden", "micheal", "thomas"], 234.12362342];
console.log(arrayExample);
console.log(arrayExample[1]);
console.log(arrayExample[6][1]);

//foreach syntax:
//arrow functions, nameless functions
// input => code
// (inputs) => {code to run}
arrayExample.forEach(item => console.log(item));
arrayExample.forEach(
    (item)=> {
        console.log(item);
        console.log("inside of the loop");
    });

// WARNING >; (
// null mean no value
// undefined means searching for a value, can't find it
// null is not equal to undefined
console.log(null === undefined);
console.log("5" == 5);
console.log("5" === 5);

// Javascript DOM Manipulation
console.log("hello world!");

//querySelectors - ways to select HTML elements from the webpage
let listItems = document.querySelectorAll('li');
console.log(listItems);

listItems.forEach((elements) => {
    elements.style.color = "blue";
});

 let cornNutOpinionText = document.getElementById("cornNutOpinion");
 cornNutOpinionText.style.fontWeight = "bold";

let facts = Array.from(document.getElementsByClassName("fact"));
facts.forEach((fact) => {
    fact.innerText = "hello";
});

cornNutOpinionText.addEventListener("click", cornNutFunction);

function cornNutFunction(){
    cornNutOpinionText.style.fontSize = "10pt";
}

listItems.forEach(elements) =>{
    element.addEventListener("mouseover", () => {
        element.style.color = "white";
    });
    element.addEventListener("mouseleave", () => {
        element.style.color = "blue";
    });
};