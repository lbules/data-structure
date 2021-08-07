
function insert(arr, item, index) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            newArr.push(item)
            newArr.push(arr[i])
        } else {
            newArr.push(arr[i])
        }
    }

    return newArr;
}

const arr = [1, 2, 3, 4]
const res = insert(arr, 'z', 2)

console.log(res);
