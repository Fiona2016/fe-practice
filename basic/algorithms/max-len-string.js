/**
 * 最长不重复子串
 */
function maxLenSubString (str) {
  if (!str.length) {
    return 0
  }
  if (str.length === 1) {
    return 1
  }
  let maxLen = 1
  let maxArr = [str[0]]
  for (let i = 1; i < str.length ; i++) {
    const index = maxArr.indexOf(str[i])
    if (~index) {
      maxArr = [...maxArr.splice(index + 1),str[i]]
    } else { // 不重复
      maxArr.push(str[i])      
    }
    maxLen = Math.max(maxLen, maxArr.length)
  }
  return maxLen
}

const test = str => console.log(maxLenSubString(str))
// const test = function (str) {
//   console.log(maxLenSubString(str));
// }
test('')
test('a')
test('dvdf')
test('abcdecfg')
test('adda')
test('abddecfgf')