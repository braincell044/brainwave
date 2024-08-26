const PI = Math.PI
console.log(PI)
console.log(Math.round(PI))
console.log(Math.round(5.6))
console.log(Math.round(5.3))
let math = Math.random() * 6
let ranfloor = Math.floor(math)
console.log(Math.random() * 6)
console.log(ranfloor)

console.log(Math.abs(-5))
let numb = 110
console.log(Math.sqrt(numb))


console.log(Math.pow(5,4))

// let greet = alert("Good afternoon")

 let now = prompt("what are you doing")
 console.log(now)

 console.log(now.trim())

// let areyousure = confirm("are you sure you want to exit the page")

// console.log(areyousure)

// if (areyousure === true)
//     {
//         console.log("Hi, it is okay")
//     }
//     else
//     {
//         console.log("N0, i don't want to go")
//     }
// areyousure == true ? console.log("welcome to my page") : console.log("pls don,t leave me")


// string concatenation

let space = " "
let firstName = "Ugochukwu"
let lastName = 'Meshach'
let full_name = firstName + space + lastName
console.log(full_name)




let totalamout = 2000

console.log(` ${"my total is"} ${totalamout}`)


let words = 'Hello'

console.log(words.length)
console.log(words[4])
console.log(words.toUpperCase())
console.log(words.toLowerCase())

console.log(words.split())
let data_1 = words.split()
console.log(typeof(data_1))
console.log(Array.isArray(data_1))

console.log(words.includes(data_1))


console.log(words.replace('Hello', "hi"))
parseInt()
let num_1 = 9.81
let num = parseInt(num_1)
console.log( num)

let prompt_1 = prompt("Enter first number")
console.log(prompt_1 )

let prompt_2 = prompt("Enter second number")


console.log(prompt_2)
let mytotal = parseInt(prompt_1) + parseInt(prompt_2)
console.log("The sum of the two number is " + mytotal )


