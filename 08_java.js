// array

// const myArray = [0, 1, 2, "Ram", true];
// console.log(myArray[1]);
// console.log(myArray);
// myArray.push(6)
// console.log(myArray);
// myArray.unshift(9)
// console.log(myArray);
// myArray.shift()
// console.log(myArray)
// myArray.pop()
// console.log(myArray);

//console.log(myArray.indexOf("Ram"))


// slice and splice

const myArray1 = []
console.log(typeof(myArray1))

const myNewArray = [1, 2, 3, 4, 5, 6];

const myArray2 = myNewArray.splice(0,3) 
console.log(myArray2);
// console.log(myNewArray.slice(0,3));
// console.log(myNewArray); // just makes a copy of myNewArray, but does not change the original array

// console.log(myNewArray.splice(0,3));
// console.log(myNewArray);
// myArray2 = myNewArray.splice(0,3);

const newArray1 = [1,2,3,4]
const newArray2 = [5,6,7,8]

// const newArray3 = newArray2.concat(newArray1)
// console.log(newArray3)

// console.log(newArray1)
// console.log(newArray2)
// const newArray4 = [...newArray1 , ...newArray2]
// console.log(newArray4);

for (let i = 0; i < newArray1.length; i++) {
    const element = newArray1[i];
    console.log(element)
    
}