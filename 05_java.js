// strings
const name = "Rahul"
const repoCount = 50 

console.log(name + repoCount);
console.log(`Hello my name is ${name} and my repo name is ${repoCount}`);

const objectNew ={
    newName: "Rahul",
    id: 123,
}

const myObjectNew = objectNew;

myObjectNew.newName = "Ram";

console.log(objectNew)
console.log(myObjectNew)