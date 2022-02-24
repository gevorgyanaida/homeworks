// 1.Declare 2 variables a and b, such that a>b, and define values for them. Output their sum, difference, product, quotient, remainder

let a = +prompt('First number')
let b = +prompt('Second number')
let sum = a + b
let difference = a - b
let product = a * b
let quotient = a / b 
let remainder = a % b

// 2.Print your name and age in the following format: “My name is ____, I am ____ .”

const name = 'Aida'
const age = 17
console.log("My name is " + name + ", I am " + age + ".")

// 3.Declare a variable with defined value. Print the last digit of the number, (input 78756, -122, 8, 0)

let number = prompt('Write the number') 
  let lastDigit = number % 10
console.log(lastDigit)

// 4.Check whether a given number is negative. Print “yes”, if it is negative, print “no” otherwise (input 0, -71, 89).

let number = prompt(' Write number')
if (number < 0) {
    console.log('yes')
} else {
    console.log('no')
}

// 5.Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0, (input 3, 14; 18, 2; 7, 21)

let number1 = +prompt('First number')
let number2 = +prompt('Second number')
if (number1 % number2 === 0) {
    console.log(1)
} else if (number2 % number1 === 0) {
    console.log(1)
} else if (number1 % number2 !== 0) {
    console.log(0)
} else {
    console.log(0)
}

// 6.Given any number between 1 and 12. Print the name of the respective month.

let number = prompt('Write any number between 1 to 12')
switch (number) {
    case '1' : {
        console.log('January')
        break;
    }   
    case '2' : {
        console.log('February')
        break;
    } 
    case '3' : {
        console.log('March')
        break;
    }    
    case '4' : {
        console.log('April')
        break;
    }    
    case '5' : {
        console.log('May')
        break;
    }    
    case '6' : {
        console.log('June')
        break;
    }    
    case '7' : {
        console.log('July')
        break;
    }    
    case '8' : {
        console.log('August')
        break;
    }    
    case '9' : {
        console.log('September')
        break;
    }    
    case '10' : {
        console.log('October')
        break;
    }    
    case '11' : {
        console.log('November')
        break;
    }    
    default : {
        console.log('December')
    }
}

// 7.Given three numbers. Find the maximum one, (input 1)-4 , 6, 0; 2)1020, 500, - 450; 3)14, 8, 14)

let number1 = +prompt('The first number')
let number2 = +prompt('The second number')
let number3 = +prompt('The third number')
if (number1 >= number2 && number1 >= number3) {
    console.log(number1)    
} else if (number2 >= number1 && number2 >= number3) {
    console.log(number2)
} else if (number3 >= number1 && number3 >= number2) {
    console.log(number3)
}
