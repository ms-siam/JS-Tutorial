// For Loops

for(let i = 1; i <= 5; i++) {
    console.log("This is for loops");
}

// While Loops

let j = 1;
while (j <= 5){
    console.log("j = ", j);
    j++;
}

// Do-while Loop

let x = 1;
do{
    console.log("x = ", x);
    x++;
} while(x <= 5);

let y = 10;
do{
    console.log("y = ", y);       // Do-while loop first      
                                  //executes the statement then checks the condition that means 
                                 //at least one time it will execute the.
    y++;
} while(y <= 5);


//For of loop

let Name = "Mobarok";
for(let i of Name){
    console.log("i = ", i);
}

// For in loops

let mySelf = {
    _name: "Mobarok",
    age: 19,
    cgpa: 9.5,
    isPass: true,
};
for (let key in mySelf){
    console.log("key = ", key, "| Value = ", mySelf[key]);
}

//Practise Question 1

console.log("Print all the even number from 0 to 100");


for(let number = 1; number <= 100; number++) {
    if (number % 2 === 0){
        console.log(number);
    }
}

// Template Literals

let specialString = `This is called template literals.`
console.log(typeof specialString);

let me = {
    nickname: "Jerry",
    love: "Coding",
};

//This is template literals . this is also string but has some special ability

console.log(`My nickname is ${me.nickname} and i love ${me.love}.`);

// and this is just normal strings

console.log("My nickname is", me.nickname, "and i love", me.love,".");

//String Methods

let day = "monday";
let DAY = day.toUpperCase();
console.log(`This is ${day} and this is ${DAY}.`);
let DAY2 = "TUESDAY";
let day2 = DAY2.toLowerCase();
console.log(`This is ${DAY2} and this is ${day2}.`);

let spaceString = "    Hello Howdy there !   ";
console.log(spaceString.trim());  // str.trim() method clears the starting and ending spaces of strings
console.log(spaceString);

console.log(day.slice(0,3));  //mon
console.log(day.slice(3));  //day

day_day2 = day.concat(day2);  //mondaytuesday
console.log(day_day2);

DAY3 = "WEDNESDAY";
DAY3replace = DAY3.replace("WEDNES", "THURS");
console.log(DAY3replace);  //THURSDAY

let hello = "Hellolololololo!";
console.log(hello.replaceAll("lo", "p"));
console.log(hello.charAt(6));

// Last Practise Question
let fullname = prompt("Enter your fullname: ");
fullname = fullname.toLowerCase();
let fullName = fullname.replaceAll(" ","");
let size = fullName.length;
let username = `@${fullName}${size}`;
console.log("Your suggested username is: ", username);
