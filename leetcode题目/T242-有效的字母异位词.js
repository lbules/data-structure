/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 长度不一致直接false
    if(s.length!==t.length) return false

    const a = {}
    const b = {}

    // 将s字符串字符出现次数保存到对象啊
    for(v of s) {
        a[v] = a[v]==null?1:a[v]+1
    }

    // 将t字符串字符出现次数保存到对象啊
    for(v of t) {
        b[v] = b[v]==null?1:b[v]+1
    }

    // 比较a和b
    for(let i =0;i<s.length;i++) {
        // b存在相对应的字符
        if(b.hasOwnProperty(`${s[i]}`)) {
            // 出现次数不一致
            if(a[s[i]]!==b[s[i]]) {
                return false
            }
        }else {
            // 两者的字符对应不上
            return false
        }
    }
    return true
};

const s= 'rat'
const t= 'car'

const res = isAnagram(s,t)
console.log(res);
