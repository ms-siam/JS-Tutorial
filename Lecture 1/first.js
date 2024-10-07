console.log("Mobarok Sarker");
console.log("Today is 7th October of 2024");
console.log("I love Python!");

nickName = "Jerry";
console.log("My nickname is " + nickName);

x = null;

y = undefined;

married = false;

let a = BigInt("45454654354343");
console.log(typeof a);
console.log(a);

let b = Symbol("This is symbol data type");
console.log(typeof b);
console.log(b);

// Bellow there is a object. An object is a collectionsof data

const myself = {     // an object should be delared by const 
    // key : value
    fullName : "Md Mobarok Sarker Siam",
    age : 19,                  // keys should be separated by commas [,] not semicolon [;]
    height : "5 ft 6 in",
}
console.log(typeof myself);
console.log(myself);

// object.key OR object["key"] to access any single key value of a objet
console.log(myself["fullName"]);
console.log(myself.age);


// to updat a value within of an object 

myself.age = myself.age + 1;
myself.fullName = "Mobarok Sarker";
console.log(myself.age);
console.log(myself.fullName);
//there is another way

myself["age"] = myself["age"] + 1;
myself["height"] = "5 ft 8 in";

console.log(myself.age);
console.log(myself["height"]);