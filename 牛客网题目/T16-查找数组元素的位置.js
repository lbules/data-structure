function indexOf(arr, item) {
    //浏览器支持indexof
    if(Array.prototype.indexOf) {
        return arr.indexOf(item)
    }
    //不支持indexof
    for(let i=0;i<arr.length;i++) {
        if(a[i]===item){
            return i
        }else {
            return -1
        }
    }
}