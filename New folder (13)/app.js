//chapter 14-16
//Q1
varconst (studentNames = []);
//Q2
varconst (studentNames = new Array());
//Q3
const stringArray = ["apple", "banana", "cherry"];
//Q4
const numberArray = [1, 2, 3, 4, 5];
//Q5
const booleanArray = [true, false, true];
//Q6        
const mixedArray = ["apple", 2, true, "banana", 4, false];
//Q7
//In html  page 
//Q8
const studentNames = ["Alice", "Bob", "Charlie"];
const studentScores = [420, 380, 450]; 
const studentPercentages = [];
for (let i = 0; i < studentNames.length; i++) {
    const percentage = (studentScores[i] / 500) * 100;
    studentPercentages.push(percentage.toFixed(2)); 
}
for (let i = 0; i < studentNames.length; i++) {
    console.log(`Student: ${studentNames[i]}`);
    console.log(`Score: ${studentScores[i]}/500`);
    console.log(`Percentage: ${studentPercentages[i]}%\n`);
}
//Q9
const colorArray = ["Red", "Green", "Blue"]

document.write("<h3>Original Array:</h3>");
document.write(colorArray.join(", ") + "<br>");
const colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colorArray.unshift(colorToAddAtBeginning);
const colorToAddAtEnd = prompt("Enter a color to add to the end:");
colorArray.push(colorToAddAtEnd);
colorArray.unshift("Purple", "Yellow");
colorArray.shift();
colorArray.pop();
const indexToAdd = parseInt(prompt("Enter the index to add a color:"));
const colorToAdd = prompt("Enter the color to add:");
colorArray.splice(indexToAdd, 0, colorToAdd);
const indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
const numToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colorArray.splice(indexToDelete, numToDelete);
document.write("<h3>Updated Array:</h3>");
document.write(colorArray.join(", "));
//Q10
varconst (studentScores = [88, 75, 92, 80, 78, 95, 87, 68]);
(studentScores.sortfunction(a, b)); {
    return a - b;
}
console.log("Sorted Student Scores (Ascending Order):");
console.log(studentScores);
//Q11
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
const selectedCities = [];
selectedCities.push(cities[0]);
selectedCities.push(cities[1]);
selectedCities.push(cities[2]);
console.log("Selected Cities:");
console.log(selectedCities);
//Q12
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" "); 
console.log(singleString); 
//Q13
const fifoQueue = [];
fifoQueue.push("Value 1");
fifoQueue.push("Value 2");
fifoQueue.push("Value 3");
const firstValue = fifoQueue.shift(); 
const secondValue = fifoQueue.shift(); 
console.log("First Value: " + firstValue);
console.log("Second Value: " + secondValue);
console.log("Remaining Value: " + fifoQueue[0]);
//Q14
const lifoStack = [];
lifoStack.push("Value 1");
lifoStack.push("Value 2");
lifoStack.push("Value 3");
const lastValue = lifoStack.pop(); 
const secondLastValue = lifoStack.pop();
console.log("Last Value: " + lastValue);
console.log("Second Last Value: " + secondLastValue);
console.log("Remaining Value: " + lifoStack[lifoStack.length - 1]);
//Q15
//In html age
