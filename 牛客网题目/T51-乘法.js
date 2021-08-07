/* 求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
    这道题传入两个数，需要确定精确到几位小数。
*/


function multiply(a, b) {
    // 1.先将两个数转成字符串
    let str1 = a.toString()
    let str2 = b.toString()

    // 2.获取小数点后的位数,不一定有小数位
    let lenA = (str1.indexOf('.')===-1)?0:(str1.length - str1.indexOf('.')-1)
    let lenB = (str2.indexOf('.')===-1)?0:(str2.length - str2.indexOf('.')-1)

    // 3.取最精确的小数位数
    let len = Math.max(lenA,lenB)

    return (a*b).toFixed(len);
}


console.log(multiply(3,3.3));