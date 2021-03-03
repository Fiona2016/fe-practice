/**去掉重复数字 */
function removeRepeat (arr) {
  let slow = 0
  for (let fast = 0; fast < arr.length; fast ++ ) {
    if (arr[fast] !== arr[slow]) {
      arr[++slow] = arr[fast]
    }
  }
  return arr.slice(0, slow + 1).join(',')
}
console.log(removeRepeat([0, 1, 1, 2, 2, 2, 3]))