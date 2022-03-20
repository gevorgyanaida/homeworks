// 1. Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements starting from a to b spaced by step.

function evenlySpacedArr(a, b, step) {
    let arr = []
    for(; a <= b; a += step) {
    arr.push(a)
}
    return arr
}

// 2. Given a string and a symbol. Find the number of occurrences of the symbol in the string.

function numberOf(str,sym) {
    let count = 0
    for(let i = 0; i < str.length; i++){
    if (str[i] === sym) {
        count++
}
}
    return count
}

// 3. Given a string. Check whether the string is palindrome or not.

function checkPalindrome(string) {
    for (let i = 0; i < string.length / 2; i++) {

        if (string[i] !== string[string.length - 1 - i]) {
            return 'It is not a palindrome'
        }
    }
    return 'It is a palindrome'
}

// 4. Given an array of numbers. Find the maximum element in array.

function maxElOfArr(arr) {
    let max = arr[0]
    for(let i = 0; i<arr.length; i++) {
        max = Math.max(max,arr[i])
    }
    return max
}

// 5. Given an array. Create the array which elements are products between two neighbours.

function arrOfProducts(arr) {
    let resArr = []
    for(let i = 0; i < arr.length - 1; i++) {
        let res = arr[i] * arr[i + 1]
        resArr.push(res)
    }
    return resArr
}

//6. Given a string and symbols. Change first symbol by the second one in the string.

function change(str, sym1, sym2) {
    let resStr = ''
    for(let i = 0; i < str.length; i++) {
        if (str[i] === sym1) {
            resStr += sym2
        } else {
            resStr += str[i]
        }
    }
    return resStr
}

// 7. Print the following number pattern:
//1
//12
//123
//1234
//12345
//1234
//123
//12
//1

// In this pattern num is 5

let num = +prompt('number')
let res = ''

function theRow(end){
    let start = 1
    let res = ''
    for(let i = 0; i < end ; i++ , start++){
        res += start
}
    return res
}

for(let k = 1;k <= num; k++) {
    res += theRow(k) + '\n'
}

for(let m = num - 1;m >= 1; m--){
    res += theRow(m) + '\n'
}

console.log(res)