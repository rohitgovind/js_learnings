// array_2

const marvel_heroes = ["thor", "spiderman", "Ironman"]
const dc_heroes = ["super man", "flash", "batman"]

const combinedMarvelHeroes = marvel_heroes.concat(dc_heroes)
console.log(combinedMarvelHeroes);

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0])

// console.log(Math.floor(Math.random()*6)+1)
// console.log(Math.floor(Math.random()*6)+1)

const anotherArray = [1,2,3,[4,5],6,[7,8,[9,10]]]

const realArray = anotherArray.flat(Infinity)
console.log(realArray);

console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Rohit"})); //interesting case

