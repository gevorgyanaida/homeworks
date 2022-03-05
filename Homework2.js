// 1. For a given number calculate the sum of its digits.

let value = +prompt('Tiv')
let sum = 0
while(value){
    sum += value%10
    value = Math.floor(value/10)
}
console.log(sum)

// 2. Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” if it is valid and “no”; otherwise. (Triangle is valid if the sum of its two sides are greater than the third side).

let side1 = +prompt('Erkarutyun')
let side2 = +prompt('Erkarutyun')
let side3 = +prompt('Erkarutyun')
if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1){
    console.log('Yes')
} else {
    console.log('No')
}

// 3. Given a number print its digits count.

let number = +prompt('Tiv')
let numOfDigits = 0
if (number===0) {
    console.log(1)
} else {
    while (number) {
        numOfDigits++
        number = (number-number%10)/10
    }
    console.log(numOfDigits)
}

// 4. Count numbers of digit 9 in a number.

let number = +prompt('Tiv')
let numberOfDigit9 = 0
for (;number!==0;number=(number-number%10)/10) {
    if (number%10===9) {
        numberOfDigit9++
    }
}
console.log(numberOfDigit9)

// 5. Given a positive number. Print it in reverse order.

let num = +prompt('Tiv')
let rev = 0
let lastDigit 
while (num!==0) {
    lastDigit = num % 10
    rev = rev*10 + lastDigit
    num = Math.floor(num/10)
}
console.log(rev)
