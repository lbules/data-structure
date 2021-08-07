function remove(arr, item) {
    const res = arr.filter((v)=>{
        return v!==item
    })
    return res
}
function remove2(arr, item) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]!==item) {
            res.push(arr[i])
        }
    }
    return res
}



const arr = [1, 2, 3, 4, 2]
const resArr = remove2(arr,2)
console.log(resArr);