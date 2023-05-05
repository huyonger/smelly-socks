Function.prototype.call = function (obj, ...args) {
    if (obj === null || obj === undefined) {
        obj = window
    }
    obj.tempFunc = this
    let result = obj.tempFunc(...args)
    delete obj.tempFunc
    return result
}

function add(a, b) {
    return this.name + a + b
}

let testThis = {
    name: 'huyong'
}

add.call(testThis, 1, 2)