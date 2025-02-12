// primitive 
// 7 types : String, Number, Boolean, null, Undefined, symbol, BigInt


const userId = Symbol('123')
const user2Id = Symbol('123')

console.log(userId)
console.log(user2Id)

console.log(userId === user2Id)
//Reference/Non primitive
// Array, Objects, Functions
const array = ['Hello world','How are you','I\'am fine']

const object = {
    name: 'noname',
    age: '20',
}


const myFunction = function(){
    console.log("how are you");
    console.log("finee!!");
}

console.log(myFunction)

// stack {Primitive}, Heap {Non-Primitive}
