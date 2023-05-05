const CONV = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
var toHex = function (num) {
    if (num === 0) return "0"
    let ans = [];
    if (num < 0)
        num += 2 ** 32;
    while (num !== 0) {
        ans.push(CONV[num % 16]);
        num = Math.floor(num / 16);
        if (num == 0)
            break;
    }
    ans.reverse();
    return ans.join("");
};
