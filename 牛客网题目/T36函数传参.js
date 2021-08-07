function argsAsArray(fn, arr) {
    // 1.将数组的每一项对应
    return fn(arr[0],arr[1],arr[2])

    // 2.使用apply，apply的第二个参数是一个数组
    return fn.apply(fn,arr)

    // 3.使用call,call接收的是若干个参数列表
    return fn.call(fn,arr[0],arr[1],arr[2])
}