/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length
  if (len === 1) { return s }

  let maxPalindrome = ''
  for (let i = 0; i < len; i++) {
    for (let j = i + maxPalindrome.length; j < len; j ++) {
      const r = s.substr(i, j)
      if (isPalindrome(r) && r.length > maxPalindrome.length) {
        maxPalindrome = r
      }
    }
  }
  return maxPalindrome
}

function isPalindrome (str) {
  let [l, r] = [0, str.length - 1]
  while(l < r) {
    if (str[l] !== str[r]) {
      return false
    }
    l++ 
    r--
  }
  return true
}

const test = s => console.log(longestPalindrome(s))
const test1 = s => console.log(isPalindrome(s))

// test1('a')
// test1('aba')
// test1('abba')
// test1('abcd')

test('s')
test('sabas')
test('cbbd')