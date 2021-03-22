/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let [stack1, stack2, flag] = [[], [], false]
  const arr = s.split('')
  for (let i = 0; i < arr.length; i++) {
    switch(i) {
      case '[': {
        flag = true; break
      }
      case ']': {
      
      }
      default: {
        flag ? stack2.push(i) : stack1.push(i)
      }
    }
  }
}
const test = s => console.log(decodeString(s))
test('3[c2[b]]')