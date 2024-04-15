
// Q
let dObj = new Date();

// Q
let dStr = new Date().toString();

// Q
let dStr = new Date().toString();

// Q
let day = d.getDay();

// Q

let day = 3; 
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

alert(dayNames[day]);

// Q

let later = new Date(2020, 11, 0);

// Q
let specificDate = new Date(1992, 1, 2);

// Q
alert(new Date("1980-01-01").getTime());

//Q
let currentDate = new Date(); // Current date
console.log("Current Date:", currentDate);

currentDate.setFullYear(2023); // Changing the year to 2023
console.log("Updated Date:", currentDate);

//Q
function changeMonthToJanuary(date) {
    // Set the month to January (0)
    date.setMonth(0);
    return date;
}

// Example usage:
let currentDate = new Date(); // Get the current date
console.log("Current date:", currentDate);
let januaryDate = changeMonthToJanuary(currentDate);
console.log("January date:", januaryDate);

//Q
function calculateSum(num1, num2) {
    // Declaring a local variable
    let result;
    
    // Performing the calculation
    result = num1 + num2;
    
    // Returning the result
    return result;
}

// Example usage:
let a = 5;
let b = 7;
let sum = calculateSum(a, b);
console.log("The sum of", a, "and", b, "is", sum);


//Q

let globalVariable = "I'm a global variable";

function accessGlobalVariable() {
   
    console.log("Inside the function:", globalVariable);
}


accessGlobalVariable();

//Q

let variable = "B";

switch (variable) {
  case "A":
    console.log("Variable is A");
    // Perform action for variable A
    break;
  case "B":
    console.log("Variable is B");
    // Perform action for variable B
    break;
  case "C":
    console.log("Variable is C");
    // Perform action for variable C
    break;
  default:
    console.log("Variable is not A, B, or C");
    // Perform action for other values
}

//Q
// Prompt the user for input
let cityName = prompt("Enter a city name:");


cityName = cityName.toLowerCase();


switch (cityName) {
    case "london":
        alert("You entered London.");
      
        break;
    case "paris":
        alert("You entered Paris.");
       
        break;
    case "tokyo":
        alert("You entered Tokyo.");
      
        break;
    default:
        alert("The city you entered is not London, Paris, or Tokyo.");
       
}




