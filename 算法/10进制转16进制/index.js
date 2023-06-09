function toHex(num) {
    if (num === 0) return "0"
    let hexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
    let res = ""
    while (num) {
        res = hexArray[num & 0xf] + res
        num >>>= 4
    }
    return res
}