/** 1. 闭包 */
const foo = (function () {
  var v = 0
  return () => {
    // debugger
    return v++
  }
}())
for (let i = 0; i < 10; i ++) {
  foo()
}
console.log(foo())

/** only */
var o = {
  a: 'a',
  b: 'b',
  c: 'c'
}
function only (o = {},keys = []) {
  if (typeof keys === 'string') { // 兼容只有一个属性的情况
    keys = [keys]
  }
  return keys.reduce((prev, k) => ({...prev, [k]: o[k]}), {})
}
console.log(only(o, ['a', 'b']))