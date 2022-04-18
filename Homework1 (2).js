//1. Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.

function sameValue(obj){
    let arr = []
    for(let i = 0; i < Object.values(obj).length; i++){
        if ((Object.values(obj).indexOf(Object.values(obj)[i],i+1) !== -1) && arr.indexOf(Object.values(obj)[i]) === -1){
            arr.push(Object.values(obj)[i])
        }
    }
    return arr
}

function arrKeys (obj,key){
    let keys = []
    for(let k in obj){
        if (obj[key] === obj[k]){
            keys.push(k)
        }
    }
    return keys
}

function invert(obj){
    let invObj = {}
    for(let key in obj){
        if (sameValue(obj).indexOf(obj[key]) !== -1){
            invObj[obj[key]] = arrKeys(obj,key)
        } else {
            invObj[obj[key]] = key
        }
    }
    return invObj
}

//2. Given two objects. Write a function that performs shallow compare.

function shallowCompare(a,b){
    for(let key in a){
        if (Object.keys(a).length !== Object.keys(b).length){
            return false 
        }
        if (a[key] !== b[key]){
            return false
        }
    }
    return true
}

//3. Given an array. Determine whether it consists only from uniques or not.

function isUnique(arr){
    for(let i = 0; i < arr.length; i++){
        if (arr.indexOf(arr[i],i+1) !== -1){
            return 'Is not unique'
        }
    }
    return 'Is unique'
}

//4. Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern word&quot;) is a word or phrase without a repeating letter.

function isAnIsogram(str){
    for(let i = 0; i < str.length; i++){
        if (str.indexOf(str[i],i+1) !== -1){
            if (str[i] === ' '){
                continue
            }
            return 'It is not an isogram'
        }
    }
    return 'It is an isogram'
}

//5. Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.

function maxEl(arr){
    let max = arr[0]
    for(let i = 0; i < arr.length; i++){
        max = Math.max(max,arr[i])
    }
    return max
}

function minEl(arr){
    let min = arr[0]
    for(let i = 0; i < arr.length; i++){
        min = Math.min(min,arr[i])
    }
    return min
}

function countOfMissingNum(arr){
    let count = 0
    for(let i = 1; (minEl(arr) + i) !== maxEl(arr); i++){
        if (arr.indexOf(minEl(arr) + i) === -1){
            count += 1
        }
    }
    return count
}