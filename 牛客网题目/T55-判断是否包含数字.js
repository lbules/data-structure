function containsNumber(str) {
    // 数字有0-9,判断字符串里是否含有0-9数字
    for(let i=0;i<10;i++) {
        if(str.indexOf(i)!==-1) return true
    }
    return false
}

const str = 'abc123'

console.log(containsNumber(str));