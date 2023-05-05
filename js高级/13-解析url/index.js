let url = "https://harttle.land:80/tags.html?simple=true#HTML"
let reg = /^(?:([a-zA-Z]+):)?(\/{0,3})?([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:\#(.*))?$/
let res = url.match(reg)
let obj = {}
let fields = ["url", "protocol", "slash", "host", "port", "path", "query", "hash"]
res.forEach((item, index) => {
    obj[fields[index]] = item
})
if (obj.query) {
    let queryParams = obj.query
    obj.query = {}
    queryParams.split("&").forEach(item => {
        let key = item.split("=")[0]
        let value = item.split("=")[1]
        obj.query[key] = value
    })
}