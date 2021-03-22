/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  const arr = String(x).split('')
  let [l, r] = [0, arr.length - 1]
  while(l < r) {
    if (arr[l]!== arr[r]){
      return false
    }
    l++
    r--
  }
  return true
}

const test = x => console.log(isPalindrome(x))
test(121)
test(-121)