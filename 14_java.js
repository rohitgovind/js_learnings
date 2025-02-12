const user = {
    name: "Rohit",
    price: 999,

    welcomeMessaage: function() {
        console.log(`${this.name} , welcome to website`);
        console.log(this)
    }
}
// console.log(user.name)
// user.welcomeMessaage()
// console.log(this)

// function new_function(){
//     console.log(this)
// }

// new_function()

const new_data = () => ({name: "rohit"})
new_data()