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
let MyMonth = 31

if (MyMonth == 31) {
    console.log(" January has 31 days.")


}else if (MyMonth == 28){
    console.log("Febuary has 28 days.")
}

let dayToday = new Date();
let todayDate = dayToday.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
console.log("Today's date is "+todayDate );


let today = day
if (today == 7){
    console.log("today is staturday")

}

else{
    console.log("today can be any day")
}todayDate


//sunday assignment


/*
(1) Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10. done
(2)Check if 'on' is found in both python and jargon done
(3)I hope this course is not full of jargon. Check if jargon is in the sentence. done
(4)Generate a random number between 0 and 100 inclusively. done 
(5)Generate a random number between 50 and 100 inclusively done*/

//(1) Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num_2 = 9.81
let numint = parseInt(num_2)
console.log(numint)
let myParseFloat = 9.8
if (myParseFloat != 10){
    console.log(Math.round(myParseFloat))
}
//(2)Check if 'on' is found in both python and jargon
let course = ['python','jargon']
const containOn = course.includes('on')
if (containOn === true){console.log('this course is jargon')}
else{
    console.log('no be jargon')
}
//(3)I hope this course is not full of jargon. Check if jargon is in the sentence.

let sentence = "I hope this course is not full of jargon"
const containjargon = sentence.includes('jargon')
if (containjargon === true){
    console.log("these is jargon")
}
else{
    console.log("no be jargon")
}

//Generate a random number between 0 and 100 inclusively. 

let random1 = Math.random()*101
console.log(random1)
//Generate a random number between 50 and 100 inclusively
let random2 =  Math.random() * (100 - 50 + 1)
console.log(random2)

/*const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
(1) Sort the array and find the min and max age  done
(2) Find the median age(one middle item or two middle items divided by two) done
(3). Find the average age(all items divided by number of items) done
(4) Find the range of the ages(max minus min) done
(5) Compare the value of (min - average) and (max - average), use abs() method.*/


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//(1) Sort the array and find the min and max age
let min = Math.min(... ages)
let max = Math.max(...ages)
console.log(min)
console.log(max)


//(2) Find the median age(one middle item or two middle items divided by two)
let median;
//check
if (ages.length % 2 === 0){
    const mid1 = ages[ages.length / 2 - 1];
    const mid2 = ages[ages.length / 2 ]
    median = (mid1+ mid2) / 2;
    console.log(median)


}else{
    median = ages[Math.floor(ages.length / 2)];
    console.log("Median age:",  median)
}
//(3) Find the average age(all items divided by number of items)
let totalAge = ages.reduce((sum, age) => sum + age, 0)
let average = totalAge / ages.length
if (ages.length % 2 === 0){
   average / ages.length
    console.log(average)
}
//(4)Find the range of the ages(max minus min)
let range = max - min
console.log(range)

//(5) Compare the value of (min - average) and (max - average), use abs() method.
let  abs1 = Math.abs(min - average) 
console.log(abs1)
let abs2 = Math.abs(max - average)
console.log(abs2)

/* 
 Write a code which can give grades to students according to theirs scores:
90-100, A
70-89, B
60-69, C
50-59, D
0-49, F
 */
let scores = 81
if (scores  >= 90 && scores  <= 100){
    console.log("A")}
else if(scores  >= 70 && scores  <= 89){
    console.log("B")
}else if(scores >= 60 && scores  <= 69){
    console.log("C")
}
else if(scores  >= 50 && scores <= 59){
    console.log("D")
}
else if (scores  <= 49){
    console.log("F")
}






