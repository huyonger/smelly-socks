//交集
var c = a.filter(function (v) { return b.indexOf(v) > -1 })

//差集
var d = a.filter(function (v) { return b.indexOf(v) == -1 })


//并集
var f = a.concat(b.filter(function (v) { return !(a.indexOf(v) > -1) }));