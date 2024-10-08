//Arrays in JS

let heroes = ["Batman", "Superman", "Spiderman", "Ironman", "Captain America", "Dr. Strange"];
for (let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}
let cities = ["Dhaka", "Bogura", "Manikgonj", "Gopalgonj","Chittagong", "Rajshahi"];
for (let city of cities){
    console.log(city);
}

//Practise Qs 1

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0
for (let idx = 0; idx < marks.length; idx++ ){
    sum = sum + marks[idx];
}
let avg = sum / marks.length;
console.log("The average marks of the entire class: ", avg);

//Practise Qs 2

let itemPrice = [250, 645, 300, 900, 50];
let offerprice = [];
for (let index = 0; index < itemPrice.length; index++){
    offerprice.push(itemPrice[index] - (itemPrice[index] * 0.1));
}
console.log("Offer price: ", offerprice);

// Practice Question 3

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
console.log(companies);
companies.splice(1, 1, "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
