const message = "123abc456Abc789ABC"
const reg = /abc/ig
let res = message.matchAll(reg)
for (let r of res) {
    console.log(r)
}