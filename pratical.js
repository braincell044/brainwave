//what percent 26 out of 32 
// let percent 
// percent = 32 - 26 

// console.log(26 - 32)
let num1 = Number (prompt('Enter first numbers  to caculate % hint(big-num)'))
let num2 = Number(prompt('Enter second numbers  to caculate % hint(small-num)'))
let percent = (num2/ num1)*100


console.log('% is', percent)



/*  Write a code which can give grades to students according to theirs scores:
90-100, A
70-89, B
60-69, C
50-59, D
0-49, F
 */

let scores = prompt("Enter your score:")

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

//write a user input that ask to input their scores and output their grades done


let checkAge = prompt("Enter your age")

if (checkAge >= 90 && checkAge <= 100){
    console.log(" Hello Ancestors")
}else if(checkAge >= 89 && checkAge <= 50) {
    console.log("hello Adult")
}else if ( checkAge >= 49 && checkAge <= 24 ){
    console.log("young adult")
}
    else if (checkAge <= 18 ){
        console.log("teenager")
        
}