//Getting Inputs
let op = window.prompt("What operation would you like to perform: +, -, *, /");

//Storing Inputs
op1 = "+"
op2 = "-"
op3 = "*"
op4 = "/"


var input1 = window.prompt("Enter the first number:");
var input2 = window.prompt("Enter the second number:");

//Making decimals operable
num1 = parseFloat(input1)
num2 = parseFloat(input2)


//Executing operations
addition = num1 + num2
subtraction = num1 - num2
multiplication = num1 * num2
division = num1 / num2

//Displaying Results

if(op == op1) {
    alert(num1 + " + " + num2 + " is: " + addition); 
} else if(op == op2) {
    alert(num1 + " - " + num2 + " is: " + subtraction);
} else if(op == op3) {
    alert(num1 + " * " + num2 + " is: " + multiplication);
} else if(op == op4) {
    alert(num1 + " / " + num2 + " is: " + division);
} else {alert("Invalid operation selected.")}