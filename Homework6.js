//1. Get array of node ids from tree (keys).

function arrOfIds(tree, res = []){
    for(let key in tree){
        res.push(Number(key))
        arrOfIds(tree[key], res)
    }
    return res
}

//2. Get array of nodes from tree.

function arrOfStrToArrOfNum(arr){
    let res = []
    for(let i = 0; i < arr.length; i++){
        res.push(Number(arr[i]))
    }
    return res
}

function arrOfNodes(tree, res = []){
    for(let key in tree){
        if(Object.values(tree[key]).length){
            res.push({ id: Number(key), children : arrOfStrToArrOfNum(Object.keys(tree[key]))})
        }
        arrOfNodes(tree[key], res)
    }
    return res
}

//3. Implement binary search.

function myBinarySearch(arr, x){
    let middle = arr[Math.floor((arr.length - 1) / 2)]
     if (middle === x){
         return 'Element found'
     }
    if (arr.length === 0){
        return 'Element not found'
    }
    if (middle > x){
         return myBinarySearch(arr.slice(0, arr.indexOf(middle)), x)
     } else {
         return myBinarySearch(arr.slice(arr.indexOf(middle) + 1),x)
     }
}
