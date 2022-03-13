// 1. Given an array․ Compute the length of the array. (without using .length)

function findlengthof (arr) {
    return arr.push(arr.pop())
}

// 2. Given an array of numbers. Print the sum of the elements in array.

function sum (arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

// 3. Given two numbers. Print powers of 2 between that numbers. (without using Math.pow)

let start = +prompt('num1')
let end = +prompt('num2')
let arr = []
for(;start<=end; start++) {
    arr.push(start)
    for(let i = 0; i < end;i++) {
        if (start === 2**i) {
            console.log(start)
        }
        
    }
    
}

// or

function findpowerof2 (start,end) {
    for(;start<=end; start++) {
    arr.push(start)
    for(let i = 0; i < end;i++) {
        if (start === 2**i) {
            console.log(start)
        }   
    } 
}
}

// 4. Given a number as input, insert dashes (-) between each two even numbers.

let num = prompt('tiv')
let res = [num[0]]
for(let i = 0;i<num.length-1;i++) {
    if (num[i]%2===0 && num[i+1]%2===0) {
        res.push('-',num[i+1])
    } else {
        res.push(num[i+1])
    }
}
let res1 = ''
for(let j = 0; j<res.length;j++ ) {
    res1+=res[j]
}
console.log(res1)

// 5.Insert a n positive number. Print the n-st prime number.

function isPrime(num) {
    if (num<=1) {
        return false
    } else if(num % 2 === 0 && num > 2) {
        return false
    } else {
        for(let i = 3; i <=Math.sqrt(num); i+=2) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
}

let num = +prompt('tiv')
let arr = []
for(let start =2;arr.length<=num;start++) {
    if (isPrime(start)) {
        arr.push(start)
    }
}
console.log(arr[num-1])
