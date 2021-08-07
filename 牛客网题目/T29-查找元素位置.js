function findAllOccurrences(arr, target) {
    const res = []
    arr.forEach((item,index)=>{
        if(item===target) {
            res.push(index)
        }
    })

    return res
}

const arr =['a','b','c','d','e','f','a','b','c']

const res = findAllOccurrences(arr,'a')

console.log(res);