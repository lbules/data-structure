function square(arr) {
    const newArray = []
    arr.forEach(v => {
        // 使用Math求平方
        // newArray.push(Math.pow(v,2))
        newArray.push(v*v);
    });

    return newArray;
}

const arr =[1,2,3,4];
const res = square(arr)

console.log(res);

let a = 2
console.log(Math.pow(a,2));