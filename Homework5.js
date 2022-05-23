//1. Create a function that builds a tree.

const treeNodes = [
    {id: 'root', children: [1, 2]},
    {id: 1, children: [3]},
    {id: 2, children: [4, 5]},
    {id: 3, children: [6]},
    {id: 4, children: [7]},
    {id: 5, children: []},
    {id: 6, children: []},
    {id: 7, children: [8, 9]},
    {id: 8, children: []},
    {id: 9, children: [10]},
    {id: 10, children: []}
]

function getRoot(arr){
    let tree = {}
    for(let i = 0; i < arr.length; i++){
        if (arr[i].id === 'root'){
            tree[`${arr[i].id}`] = {}
        }
    }
    return tree
}

function toTree(arr, tree = getRoot(arr)){
    for(let i = 0; i < arr.length; i++){
        if(tree.hasOwnProperty(arr[i].id)){
            for(let j = 0; j < arr[i].children.length; j++){
               tree[arr[i].id][arr[i].children[j]] = {}
                toTree(arr, tree[arr[i].id])
            }
        }
    }
    return tree
}

/*2. Write a JavaScript function to get all possible subsets of given length of the given
array. Assume that all elements in the array are unique. */

function change(arrFrom, newArr, res = []){
    for(let i = arrFrom.indexOf(newArr[newArr.length - 1]) + 1; i < arrFrom.length; i++){
   newArr.push(arrFrom[i])
    let new1 = [...newArr]
    res.push(new1)
    newArr.pop()
}
return res
}

function someFlattening(arr){
    let res = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            res.push(arr[i][j])
        }
    }
        return res
}

function subArrays(arr, l, tem = change(arr, [])){
    if (l === 1){
        return tem
    }
    let res = []
    for(let i = 0; i < tem.length; i++){
        if(change(arr, tem[i]).length !== 0){
            res.push(change(arr, tem[i]))
        }
    }
    res = someFlattening(res)
    if (res[0].length !== l){
        return subArrays(arr, l, res, res)
    } else{
        return res
    }
}

//3. Create a decorator delay(f, ms) that delays each call of 'f' by 'ms' milliseconds.

function delay(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms)
    }
  }

//4. Implement Debounce decorator.

function debounce(f, ms) {
    let timeout
    return function() {
      clearTimeout(timeout)
      timeout = setTimeout(() => f.apply(this, arguments), ms)
    }
  }