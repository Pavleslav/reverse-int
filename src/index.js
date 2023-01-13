module.exports = function reverse (num) {
    let arr = num.toString().split("");
    let arr2 = "";
    if (arr[0] === "-") {
      for (let i = arr.length - 1; i >= 1; i--) {
        arr2 = arr2 + arr[i];
      }
    } else {
      for (let i = arr.length - 1; i >= 0; i--) {
        arr2 = arr2 + arr[i];
      }
    }
    return arr2;
}
