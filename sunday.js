//array
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,  "ugo"]
console.log(numberArray)
console.log(numberArray.length)
console.log(numberArray[numberArray.length-1])
const fruitArray =["mango", "apple", "orange"]

console.log(fruitArray)

console.log(fruitArray[fruitArray.length-1])

let js = "javascript is very easy"
console.log(js.split(""))
//index of
numberArray[10]= "pear"
console.log(numberArray.indexOf("pear"))

fruitArray[0] = "pear"
console.log(fruitArray.indexOf("pear"))

fruitArray.indexOf("pear") ==="-1" ? console.log("dosen't exist") : console.log("exist")

numberArray.indexOf(10) === -1 ? console.log("dost't exit") : console.log("10 exit")
//include
console.log(fruitArray.includes("apple") )

console.log(fruitArray.toString())
console.log(numberArray.join())

const animalArray = ["Dog", "cat", "cow", "monkey", "lion"]
console.log(animalArray.slice(0,4))

let yourA = animalArray.slice()
console.log(yourA)
//splice
let animal = animalArray.splice(2,2)
console.log(animal)

animalArray.push("elephant")
console.log(animalArray)

animalArray.pop()
console.log(animalArray)

animalArray.shift()
console.log(animalArray)
animalArray.unshift("donkey")
console.log(animalArray)

//task

const shoppingCart = ["Milk", "Coffe", "Tea", "Honey"]
if (shoppingCart.includes("meat")=== false){
    shoppingCart.unshift("meat")

}else{console.log(shoppingCart)}
if (shoppingCart.includes("sugar") === false)
    
{
    shoppingCart.push("Sugar")
}



let confirmSure = confirm("are you allergic to honey")
if (confirmSure === true){
  shoppingCart.splice(4,1)
  console.log(shoppingCart)
    
}else{
    console.log(shoppingCart)
}

shoppingCart [3] = "Green tea"
console.log(shoppingCart)


