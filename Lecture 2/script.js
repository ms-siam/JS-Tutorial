//Arithmatic Operators

let a = 8;
let b = 3;

console.log("a = ", a," & b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);

//Unary Operators

let x = 9;
let y = 2;
console.log("x = ", x, " & y = ", y);
// x = x + 1, y = y - 1
x++;/*This is called increment*/ y--; /*This is called Decrement*/
console.log("x + 1 = ", x, " & y - 1 = ", y);

let i = 9;
console.log("i = ", i);
console.log("i++ ", i++); // Post increment. it prints value first and then changes it..like here ...it will not be 9+1=10..rather it will print 9 and then increment the value of i by 1.

console.log(i); // and here if we print i ...it will be 10...cause in previous line of code excuted x = 9 and then changes it to 10

console.log("++i ", ++i); //Pre increment. it changes the valu first then prints it
console.log(i);

//Assignment Operators

let num = 28;
console.log("num = ", num);
num += 4;
console.log("num += 4 means num = num + 4 ");
console.log("num = ", num);
num *= 2;
console.log("num *= 2 means num = num * 2 ");
console.log("num = ", num);
num -= 10;
console.log("num -= 10 means num = num - 10 ");
console.log("num = ", num);
num **= 2;
console.log("num **= 2 means num = num ** 2 ");
console.log("num = ", num);
num %= 5;
console.log("num %= 5 means num = num % 5 ");
console.log("num = ", num);
num /= 2;
console.log("num /= 2 means num = num / 2 ");
console.log("num = ", num);

/* Comparison Operators

Equal to ==
Not Equal to !=
Equal to & Type ===
Not Equal to & Type  !== 
Less than <
Less than or equal to <= 
greater than >
greater than or equal to  >=

*/

let p = 5;
let q = 3;
let r = "5";
console.log("p =", p, " Type of p: ", typeof p);
console.log("q =", q, " Type of q: ", typeof q);
console.log("r =", r, " Type of r: ", typeof r);

console.log("p == q", "5 is equal to 3", p == q,);
console.log("q == r", "3 is equal to '5'",  q == r);
console.log("p == r", "5 is equal to '5'", p == r);

console.log("p != q", "5 is not equal to 3", p != q);
console.log("q != r", "3 is not equal to '5'", q != r);
console.log("p != r", "5 is not equal to '5'", p != r);

console.log("p === q", "p and its type is equal to q and q's type",p === q);
console.log("q === r", "q and its type is equal to r and r's type", q === r);
console.log("p === r", "p and its type is equal to r and r's type", p === r);

console.log("p !== q", "p or its type is not equal to q or q's type", p !== q);
console.log("q !== r", "q or its type is not equal to r or r's type", q !== r);
console.log("p !== r", "p or its type is not equal to r or r's type", p !== r);


console.log(" Equal to ==\n Not Equal to !=\n Equal to & Type ===\n Not Equal to & Type  !== \n Less than < \n Less than or equal to <=\n greater than > \n greater than or equal to  >= \n These are the comparison operators");


/* Logical Operators

Logical AND && ,  It means if every condition is true then the result will be true.

Logical OR || , It means if one condition is true then the result will be true

Logical NOT ! , it changes the condition or result is something is true then it will change that into false

*/

console.log("LOGICAL OPERATORS");
console.log("Logical AND && ,  It means if every condition is true then the result will be true.\nLogical OR || , It means if one condition is true then the result will be true\nLogical NOT ! , it changes the condition or result is something is true then it will change that into false");

//practise 1

let Num = 45; //prompt("Enter a Number: ");
if (Num % 5 === 0) {
    console.log("The number you entered", Num," is a multiple of 5");
} else {
    console.log("The number you entered", Num, " is not a multiple of 5");
};

//Practise 2

let marks = prompt("Enter your marks: ");
if ((marks >= 80) && (marks < 100)) {
    console.log("Grade:A");
} else if ((marks >= 70) && (marks <= 79))
 {
    console.log("Grade:B");
} else if ((marks >= 60) && (marks <= 69))
 {
    console.log("Grade:C");
} else if ((marks >= 50) && (marks <= 59))
 {
    console.log("Grade:D");
} else if ((marks >= 0) && (marks <= 49)) {
    console.log("Grade:F");
};
