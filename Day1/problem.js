// Problem 1: Age Calculator (15-20 minutes)
// Task: User se birth year input lo aur current age calculate karo
// Requirements:

// User se birth year puchho
// Current year 2025 hai
// Age calculate karke show karo
// Example: "You are 25 years old"

// Test Cases:

// Birth year: 2000 → Age: 25
// Birth year: 1995 → Age: 30

const userBirthYear = +prompt("Enter your birth year");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();


function calculateAge() {
    const userAge = currentYear - userBirthYear;
    return userAge;
}
console.log(`You are ${calculateAge()} years old.`);

////////////////////////////////////////////////////

// 🔥 PROBLEM 2 READY:
// Simple Interest Calculator
// Formula: Simple Interest = (Principal × Rate × Time) / 100
// Requirements:

// Principal amount input lo
// Rate of interest input lo
// Time period input lo
// Simple interest calculate karo
// Total amount show karo: "Total amount: X"
// Interest show karo: "Interest earned: X"

const principalAmount = +prompt("Enter your principal amount");
const interestRate = +prompt("Enter your interest rate");
const timePeriod = +prompt("Enter your time period");

function interestCalculate() {
    const interest = (principalAmount * interestRate * timePeriod) / 100;
    return interest;
}
// Mistake kyun ki multiple times call hua(Performance issue)
// console.log(`Rate of interest is: ${interestCalculate()} & ${interestCalculate() + principalAmount}`);

// const interestAmount = interestCalculate();
// const totalAmount = principalAmount + interestAmount;

console.log(`Interest Earned: ${interestAmount}`);
console.log(`Total amount: ${totalAmount}`);

////////////////////////////////////////////////

// 🔥 PROBLEM 3 - FINAL CHALLENGE:
// Temperature Converter
// Requirements:

// User se choice puchho: "1 for C to F, 2 for F to C"
// Temperature input lo
// Convert karke result show karo

// Formulas:

// C to F: (C × 9 / 5) + 32
// F to C: (F - 32) × 5 / 9

// Output format:

// "25°C = 77°F"
// "100°F = 37.78°C"

const userTemperature = +prompt("Celsius or Fahrenheit");

if (userTemperature === 1) {
    const celsius = +prompt("Enter in celsius");
    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`${celsius}°C = ${fahrenheit}°F`);
} else if (userTemperature === 2) {
    const fahrenheit = +prompt("Enter in fahrenheit");
    const celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit}°F = ${celsius}°C`);
} else {
    console.log("Invalid temperature");
}