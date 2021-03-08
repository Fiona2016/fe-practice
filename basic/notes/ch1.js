/** 实现Bind */
Function.prototype.mBind =  Function.prototype.mBind  || function (context) {
  const _this = this
  const defaultArgs = Array.prototype.slice.call(arguments, 1)
  return function bindFn() {
    const finalArgs = [...defaultArgs, ...arguments]
    return _this.apply(context, finalArgs)
  }
}
function test () {
  console.log(this.a)
}
const obj = {a: 'hello'}
const bFn = test.mBind(obj)
console.log('--', bFn()) // return的结果是undefined，因为执行test返回的结果是undefined