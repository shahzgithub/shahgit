//chapters 9-11
//Q1
var city = prompt("Enter the city name")

if (city.lower(karachi) == "karachi") { 
    console.log("Welcome to the city of lights");
} else {
    (console.log("Welcome to  the city of lights + karachi")); 
}

//Q2
var gender = prompt("Enter your gender (Male/Female)")

if (gender.lower() === "male") {
    console.log("Good Morning Sir.")
} else if (gender.lower() == "female")
    console.log("Good Morning Ma'am.")
else {
    console.log("Good Morning!")
}

//Q3
var signal_color = prompt("Enter the color of the traffic signal (Red/Yellow/Green)")


if (signal_color.lower() == "red") {
    console.log("Must Stop")
} else if (signal_color.lower() == "yellow") {
    console.log("Ready to move")
} else if (signal_color.lower() == "green") {
    console.log("Move now")
} else {
    console.log("Invalid signal color")
}
//Q4

var remaining_fuel = float(prompt("Enter the remaining fuel in your car (in liters)"))


if (remaining_fuel < 0.25) {
    console.log("Please refill the fuel in your car")
} else {
    console.log("You have sufficient fuel in your car")
}
//Q5
//A
var a = 4;
if (++a === 5){
    console.log("given condition for variable a is true");
}

//B
var b = 82;
if (b++ === 83){
    console.log("given condition for variable b is true");
}

//C
var c = 12;
if (c++ === 13){
    console.log("condition 1 is true");
}
if (c === 13){
    console.log("condition 2 is true");
}
if (++c < 14){
    console.log("condition 3 is true");
}
if(c === 14){
    console.log("condition 4 is true");
}

//D
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    console.log("The cost equals");
}

//E
if (true){
    console.log("True");
}
if (false){
    console.log("False");
}

//F
if ("car" < "cat"){
    console.log("car is smaller than cat");
}
 
//Q6

var subject1_marks = float(prompt("Enter marks obtained in subject 1"))
var subject2_marks = float(prompt("Enter marks obtained in subject 2"))
var subject3_marks = float(prompt("Enter marks obtained in subject 3"))


var total_marks = float(prompt("Enter total marks for each subject"))


var total_obtained_marks = subject1_marks + subject2_marks + subject3_marks


var percentage = (total_obtained_marks / (total_marks * 3)) * 100


if (percentage >= 90) {
    grade = "A+"
} else if (percentage >= 80) {
    grade = "A"
} else if (percentage >= 70) {
    grade = "B"
} else if (percentage >= 60) {
    grade = "C"
} else {
    (grade = "F")
}

if (grade == "A+") {
    remarks = "Excellent"
} else if (grade == "A") {
    remarks = "Very Good"
} else if (grade == "B") {
    remarks = "Good"
} else if (grade == "C") {
    remarks = "Satisfactory"
} else {
    (remarks = "Needs Improvement")
}

console.log("Total Marks: {:.2f}".format(total_marks * 3))
console.log("Marks Obtained: {:.2f}".format(total_obtained_marks))
console.log("Percentage: {:.2f}%".format(percentage))
console.log("Grade: {}")

//Q7

secret_number = random.randint(1, 10)

var user_guess = int(prompt("Guess the secret number (between 1 and 10)"))


if (user_guess == secret_number) {
    console.log("Bingo! Correct answer")
} else if ("user_guess == secret_number + 1 or user_guess == secret_number - 1") {
    console.log("Close enough to the correct answer")

} else {
    console.log("Sorry, you didn't guess the correct number. The secret number was", secret_number)
}
//Q8

var user_number = int(prompt("Enter a number"))

if (user_number % 3 == 0) {
    console.log(user_number, "is divisible by 3")
} else {
    (console.log(user_number, "is not divisible by 3"))
}

//Q9

var user_number = int(prompt("Enter a number"))

if (user_number % 2 == 0) {
    console.log("user_number, is an even number")
} else {
    console.log("user_number, is an odd number")
}
//Q10

var temperature = float(prompt("Enter the temperature"))


if (temperature > 40) {
    console.log("It is too hot outside.")
} else if (temperature > 30) {
    console.log("The Weather today is Normal.")
} else if (temperature > 20) {
    console.log("Today’s Weather is cool.")
} else if (temperature > 10) {
    console.log("OMG! Today’s weather is so Cool.")
} else {
    console.log("It is too cold outside.")
}

//Q11
var num1 = float(prompt("Enter the first number"))
var num2 = float(prompt("Enter the second number"))
var operation = prompt("Enter the operation (+, -, *, /, %)")


if (operation == '+') {
}  else if (result = num1 + num2) {  
} if (operation == '-') {
    result = num1 - num2
}  if (operation == '*') {
    result = num2 * num1
}  
if (operation == '/') { 
}      if (num2 == 0) {
        console.log("Error: Division by zero is not allowed.")
    } else {
        (result = num1 / num2)
    }        
if (operation == '%')
    if (num2 == 0) {
        console.log("Error: Modulo by zero is not allowed.")
    } else {
        (result = num1 % num2)
} 
if (console.log("Invalid operation. Please enter +, -, *, /, or %.")) {

} else {
   (console.log("Result:, result"))
}

//chapters 12-13
//Q1

var char = prompt("Enter a character (number or string)")


if (char.isdigit()) {
    console.log("f'{char}' is a number.")

} else if (65 <= ord(char) <= 90) {
    console.log("f'{char}' is an uppercase letter.")
} else if (97 <= ord(char) <= 122) {
    console.log("f'{char}' is a lowercase letter.")
} else {
    (console.log("f'{char}' is neither a number nor a letter."))
}

//Q2
var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));

if (num1 === num2) {
    console.log("The two integers are equal.");
} else {
    
    if (num1 > num2) {
        console.log(num1 + " is larger than " + num2);
    } else {
        console.log(num2 + " is larger than " + num1);
    }
}

//Q3
var num = float(prompt("Enter a number"))

if (num > 0) {
    console.log("The number is positive.")
} else if (num < 0) {
    console.log("The number is negative.")
} else {
    console.log("The number is zero.")
}

//Q4
var char = prompt("Enter a single character")

if (char.lower() in 'aeiou') {
    console.log("True: It is a vowel.")
} else {
    console.log("False: It is not a vowel.")
}

//Q5
var correctPassword = "mySecretPassword";
var userPassword = prompt("Enter your password: ");


if (userPassword === null || userPassword === "") {
    console.log("Please enter your password.");
} else {
    if (userPassword === correctPassword) {
        console.log("Correct! The password you entered matches the original password.");
    } else {
        console.log("Incorrect password.");
    }
}

//Q6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

//Q7
// Prompt the user to enter a time in 24-hour clock format
var time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));

// Check different cases using if, else if, and else statements
if (time >= 0 && time < 1200) {
    console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
} else {
    console.log("Invalid time format. Please enter a time between 0000 and 2359.");
}

































































































