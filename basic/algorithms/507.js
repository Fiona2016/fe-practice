/** perfect number
 * @param {number} num
 * @return {boolean}
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num === 1) { return false }
  let result = num - 1
  let last = num
  for (let i = 2; i <= (num + 1) / 2; i ++) {
      if (i === last) {
        break
      }
      if (num % i === 0) {
          result = result - i  - (num / i)
          last = num / i
      }
  }
  return result === 0
};
console.log(checkPerfectNumber(6))
console.log(checkPerfectNumber(496))
console.log(checkPerfectNumber(8128))
console.log(checkPerfectNumber(1))