/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // {}() ({}) ([(])
  let stack = []
  const map = {')': '(', '}': '{', ']': '['}
  s.split('').forEach(i => {
    if (stack[stack.length - 1] && stack[stack.length - 1] === map[i]) {
      stack.pop()
    } else {
      stack.push(i)
    }
    console.log(stack)
  })
  return stack.length === 0
};
const test = s => console.log(isValid(s))
// test('()[]')
// test('()[{}]')
test('()[{[]]')