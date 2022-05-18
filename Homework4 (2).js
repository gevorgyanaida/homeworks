//1. Create a function that builds a tree like object given an array with object which contains parent and id properties.

let treeNodes = [
    {parent : null, id : 0},
    {parent : 0, id : 1},
    {parent : 0, id : 2},
    {parent : 1, id : 3},
    {parent : 1, id : 4},
    {parent : 2, id : 5},
    {parent : 4, id : 6}
]

function toTree(arr, tree = getRoot(arr), count = 0){
    if (count === arr.length){
        return tree
    }
    for(let j = 0; j < arr.length; j++){
        if (tree.hasOwnProperty(`${arr[j].parent}`) === true){
            tree[`${arr[j].parent}`][`${arr[j].id}`] = {}
            count += 1
            toTree(arr, tree[`${arr[j].parent}`], count)
        }
    }
    return tree
}

function getRoot(arr){
    let tree = {}
    for(let i = 0; i < arr.length; i++){
        if (arr[i].parent === null){
            tree[`${arr[i].id}`] = {}
        }
    }
    return tree
}

/*2. Write a JavaScript function to get all possible subsets of given length of the given
array. Assume that all elements in the array are unique. */



//3. Write a recursive function to determine whether all digits of the number are odd or not.

function isOdd(number){
    if (number === 0){
        return true
    }
    if (!(number % 2)){
        return false
    }
    number = Math.trunc(number/10)
    return isOdd(number)
}

/*4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if
such element does not exist, return -1).*/

function minPosNum(arr, i = 0){
    if (arr[i] === Math.min(...arr.filter(function(el){return el >= 0 }))){
        return arr[i]
    }
    if (i > arr.length - 1){
        return -1
    }
    return minPosNum(arr,i + 1)
}