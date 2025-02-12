// singleton
// object.create

// Declaring a symbol
const newSymbol = Symbol("Key123");

// object literals
const JsUser = {
    name: "Hitesh",
    age: 18,
    [newSymbol]: "myKey123", //symbol declaration
    location: "Chennai",
    email: "hitesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser["name"])
console.log(JsUser.name)
console.log(typeof(JsUser[newSymbol]))
console.log(JsUser[newSymbol])

JsUser.email = "xyz@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "newxyz@gmail.com";
console.log(JsUser);

JsUser.username1 = function(){
    console.log(`Hello this is ${this.name}`)
}

console.log(JsUser.username1())

