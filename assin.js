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
let year = new Date();
console.log(year.getFullYear());
//month

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

let dayToday = new Date();
let todayDate = dayToday.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
console.log("Today's date is "+todayDate );


let today = day
if (today == 3){
    console.log("today is wednesday")

}

else{
    console.log("today can be any day")
}