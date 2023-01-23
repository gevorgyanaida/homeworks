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
    let middleIndex = Math.floor((arr.length - 1) / 2)
    if(arr[middleIndex] === x){
        return 'Found x'
    }
    if(arr.length === 2){
       if((arr[0] === x) || (arr[1] === x)){
           return 'Found x'
       }else{
           return 'x not found'
       }
    }
    if(x > arr[middleIndex]){
        return myBinarySearch(arr.slice(middleIndex), x)
    } else {
        return myBinarySearch(arr.slice(0, middleIndex), x)
    }
}
