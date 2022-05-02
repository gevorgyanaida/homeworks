//1. Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to second...)

function removeFirst(arr, i = 0){
    if (arr.length === 0 || arr.length === 1){
        return []
    }
    if (i === arr.length - 1){
        arr.pop()
        return arr
    } else {
        arr[i] = arr[i + 1]
    }
    removeFirst(arr, i + 1)
    return arr
}

// Nuyn arajadranq@ loopov

function removeFirstWithLoop(arr){
    let res = []
    for(let i = 1; i < arr.length; i++){
        res.push(arr[i])
    }
    return res
}

//2. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).

function flatten (arr){
    let res = []
    arr.forEach(el => {
        if (Array.isArray(el)){
            flatten(el).forEach(el => res.push(el))
        } else {
            res.push(el)
        }
    })
    return res
}

//3. Given an array and a number N. Write a recursive function that rotates an array N places to the left. (Hint: to add element to the beginning use arr.unshift())

function toTheLeft(arr, N){
    if (arr[N - 1] === arr[arr.length - 1]){
        return arr
    }
    arr.unshift(arr[arr.length - 1])
    arr.pop()
    return toTheLeft(arr, N + 1)
}

// Nuyn arajadranq@ methodnerov

function toLeftWithoutRec (arr, N){
    let res = arr.splice(0,N)
    return arr.concat(res)
}

//4. Given the list of the following readers:
//Output the books sorted by the percent in descending order which readStatus is true.
let arr = [
    { book: 'Catcher in the Rye', readStatus: true, percent: 40},
    { book: 'Animal Farm', readStatus: true, percent: 20},
    { book: 'Solaris', readStatus: false, percent: 90 },
    { book: 'The Fall', readStatus: true, percent: 50 },
    { book: 'White Nights', readStatus: false, percent: 60 } ,
    { book: 'After Dark', readStatus: true, percent: 70 }
    ]

arr.filter(function (el){
    return el.readStatus === true
}).sort(function(a, b){
    return b.percent - a.percent
})

//5. Implement "map" method for plain objects (same as Array map method.)

function customMapOnObj(fn){
    let res = {}
    for(let key in this){
        res[key] = fn(this[key])
    }
    return res
}