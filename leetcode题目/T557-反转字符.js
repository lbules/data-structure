/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let arr = s.split(' ')
    
    let res = arr.map(item=>{
        return item.split('').reverse().join('')
    })

    return res.join(' ')
};

const s = "Let's take LeetCode contest"

reverseWords(s)