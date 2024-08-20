// assignment

let figure, num
figure = 4
num = 3
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

//year
let year = new Date ()
date = new Date ()
myYear =  date.getYear()

console.log(myYear)
//month
let myMonth = date.getMonth()

console.log(myMonth)
// today's date
console.log(date)
//day
let day = new Date ()
day = day.getDay()
console.log(day)
// hour
let MyHour = new Date ()
MyHour = MyHour.getHours()
console.log(MyHour)
//minute
let minute = new Date()
minute = minute.getMinutes()
console.log(minute)

// let MyMonth = new Date()
// MyMouth = MyMonth.getMonth()
let MyMonth
MyMonth = 31

if (MyMonth == 31) {
    console.log(" January has 31 days.")


}else if (MyMonth == 28){
    console.log("Febuary has 28 days.")
}

