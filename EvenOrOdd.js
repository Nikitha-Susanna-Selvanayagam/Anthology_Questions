// 1.Suitable for P1
// Question : Write a program to check if the given number is odd or even.

let x = 124566245787

const evenOrOdd =(n)=>{
    if(n % 2 == 0){
        return "Number is even"
    } else {
        return "Number is odd"
    }
}

let result = evenOrOdd(x)
console.log(result)