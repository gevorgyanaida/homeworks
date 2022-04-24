//1. Given an array of numbers which is almost sorted in ascending order. Find the index where sorting order is violated.

function orderViol(arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] >= arr[i + 1]){
            return i + 1
        }     
    }
    return -1
}

//2. Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each row and print them as an array

function sum (arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

function sumOfArr(arr){
    let sumArr = []
    for(let i = 0; i < arr.length; i++){
       sumArr.push(sum(arr[i]))
    }
    return sumArr
}

/*3. Given an array of integers. Write a function that return new array from first array,
where removed even numbers, and odd numbers was multiplied with new array length */

function newArr(arr){
    function odd(el){
       if (el % 2){
           return true
       }
    }
       let res = arr.filter(odd).map(function(el){
       return el * arr.filter(odd).length
   })
   return res
}

/*4. Given a number. Write a function that calculates its sum of the digits and if that sum
has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
return the result.*/

function getSum(n) {
    let sum = 0
    while (n > 0 || sum > 9) {
         if(n === 0) {
            n = sum
            sum = 0
         }
         sum = sum + n % 10
         n = Math.floor(n / 10)
    }
    return sum
}

/*5. Write a recursive function which receives a number as arguments and returns the
fibonacci sequence as array.*/

function fibonacciSequence(num){
    let arr = [1,1]
    if(typeof num === 'undefined'){
        return []
        } else if(num < 2){
        for(let j = 0; arr.length !== num; j++){
            arr.pop()
        }
    } else {
       for(let i = 0; arr.length < num; i++){
           arr.push(arr[i] + arr[i + 1])
       }
    }
    return arr
}