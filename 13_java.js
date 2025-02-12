function SayMyname(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}
// SayMyname()

function addTwonumbers(number1, number2){
    // console.log(number1 + number2);
    let result = number1 + number2
    const object = {
        1: result,
    }
    return object
}


const newValue = addTwonumbers(3 , 4);
console.log(newValue);

// shopping cart

function cartPriceCalculator(...num1){ // spread as well as rest operator ...
    return num1
}

console.log(cartPriceCalculator(100,200,300))

