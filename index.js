

let x 
x = 30;
console.log(x)
x = 40
console.log(x)

const y = "john"

console.log(y)



let myNum = {
    name: "john",
    age: 20

}

console.log(typeof myNum)

// let myArray = [ 30, "key",  true,  {gender: "male"}]

// console.log(Array.isArray(myArray))

let myArray = [ 30, "key",  true,  {gender: "male"}]

console.table(myArray)

let myDate = new Date()
console.log(myDate)

let firstNumber;
let SecondNuber;

firstNumber = 11
SecondNuber = 5
console.log(firstNumber % SecondNuber)
let sum = firstNumber ** SecondNuber
console.log(sum)

let sumTwo = 2
sumTwo++
console.log(sumTwo)


let a, b;
a = 20
a += 5
console.log(a)

let c , d
c = 8
d = 0
console.log(c != d) //false cos they are same vaule
console.log(c >= d) 

let total;  
 total = c < 10 || d > 1
console.log(total)
console.log(!c==d)

let today = myDate.getDay()

if (today == 2){
    console.log("today is Monday")


} else if(today == 2){
    console.log('today is not Tueday')
}

    
else if (today == 6){
    console.log('today is Saturday')

}
else {
    console.log("today may be Tue, Wed, Thur, Frid or Sun")
}

let myName, your_name;
myName = "ugochukwu"
your_name = "adam"

console.log("my name is " + myName)
console.log("your name is " + your_name)

// let month = month. newDate()

// console.log(month)
// let myMonth = new Date ()

// console.log(myMonth.getMonth())
let myNewMonth = new Date ()
let myMonth = myNewMonth.getMonth();
console.log(myMonth)


switch (myMonth){
    case 0:
        console.log("this is january");
        break;
    case 1:
        console.log("february");
        break;
    case 11:
        console.log('December');
        break;
    case 7:
            console.log("this is the month of August");
            break;
    default:
        console.log("it can be any month")

}
for (let num = 0; num < 10; num++){
    console.log(num)
}
for (let num = 6; num > 3; num--){
    console.log(num)
}

for (let num = 1; num <= 10; num ++){
   if (num % 2 === 0){
    console.log(num)
   }
  
}
let i = 0
do {
    console.log("Good evenimg"); i++
} while(i < 4)


const person = {
    Name: "Ugo",
    _gender: "male",
    nationality: "Nigerian",
    isMarried: false,
    phone_number: 2024

}
console.log(person)

for (let each in person ){
    console.log(each)
}
const newArr = [1, 2, 3, 4, "john", false, {name: "Ada"}]

for (let eachItem of newArr){
    console.log(eachItem)
}


let ciziten = {
    Name: "ugochukwu",
    year: 2000,
    Nigerian : true,
    


}
console.log(ciziten)
let MyArray = [ 
     2000

]
console.log(MyArray)

let country = "Nigeria"

console.log(country)

 let year = 2024
 console.log(year)

 let gender = {
    male : true
 }
 console.log(gender)