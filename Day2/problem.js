// Problem 1: Grade Calculator(15 - 20 minutes)
// Task: Marks ke basis pe grades assign karo
// Requirements:

// User se marks input lo(0 - 100)
// Grade calculate karo based on:

// 90 - 100: A +
//     80 - 89: A
// 70 - 79: B
// 60 - 69: C
// 50 - 59: D
// Below 50: F

// Output format: "Your grade is: A"

// Step 1
// User se marks input lo(0 - 100)
// const userMarks = +prompt("Enter your marks");
const userMarks = 99;
let userGrade;

// Step 2
// Grade calculate karo based on:
if (userMarks <= 100 && userMarks >= 90) {
    userGrade = "A+"
} else if (userMarks <= 89 && userMarks >= 80) {
    userGrade = "A"

} else if (userMarks <= 79 && userMarks >= 70) {
    userGrade = "B"

} else if (userMarks <= 69 && userMarks >= 60) {
    userGrade = "C"

} else if (userMarks <= 59 && userMarks >= 50) {
    userGrade = "D"

} else if (userMarks <= 49 && userMarks >= 0) {
    userGrade = "Fail"
} else {
    console.log(`Invalid Marks`);
}
// Step 3
// Output format: "Your grade is: A"
console.log(`Your grade is: ${userGrade}`);


////////////////////////////////////////////////

// Problem 2: Discount Calculator (15-20 minutes)
// Task: Different discount slabs apply karo
// Requirements:

// User se purchase amount input lo
// Discount slabs:

// Above 5000: 20% discount
// 2000-4999: 15% discount
// 1000-1999: 10% discount
// Below 1000: 5% discount


// Final amount show karo

// Output: "Discount: X, Final amount: Y"

// Step 1
// User se purchase amount input lo
// const userPurchaseAmount = +prompt("Enter user purchase amount");
const userPurchaseAmount = 3000;
let userDiscount;

// Step 2
// Discount slabs:
if (userPurchaseAmount >= 5000) {
    userDiscount = 20;
} else if (userPurchaseAmount >= 2000 && userPurchaseAmount <= 4999) {
    userDiscount = 15;
} else if (userPurchaseAmount <= 1999 && userPurchaseAmount >= 1000) {
    userDiscount = 10;
} else {
    userDiscount = 5;
}
// Step 3
// Output: "Discount: X, Final amount: Y"
console.log(`Discount: ${userDiscount}% | Final Amount: ${userPurchaseAmount - (userPurchaseAmount * userDiscount) / 100}`);

///////////////////////////////////////////////////////

// Problem 3: Tax Calculator(15 - 20 minutes)
// Task: Income tax calculate karo
// Requirements:

// User se annual income input lo
// Tax brackets:

// Above 500000: 15 % tax
// 200000 - 499999: 10 % tax
// Below 200000: 0 % tax

// Tax amount aur after - tax income show karo

// Step 1
// User se annual income input lo
const userAnnualIncome = +prompt("Enter your annual income");
// const userAnnualIncome = 500000;
let userTax;

// Step 2
// Tax brackets:
if (userAnnualIncome >= 500000) {
    userTax = 15;
} else if (userAnnualIncome >= 200000 && userAnnualIncome <= 499999) {
    userTax = 10;
} else {
    userTax = 0;
}
const taxAmount = (userAnnualIncome * userTax) / 100;
const finalAmount = userAnnualIncome - taxAmount;

// Step 3
// Tax amount aur after - tax income show karo
console.log(`Tax: ${taxAmount}, After-tax income: ${finalAmount}`);