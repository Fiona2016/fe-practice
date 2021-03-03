const p1 = new Promise(resolve => {
  setTimeout(_=> resolve(1), 1000)
})
const p2 = new Promise(resolve => {
  setTimeout(_=> resolve(2), 1000)
})
const p3 = new Promise(resolve => {
  setTimeout(_=> resolve(3), 1000)
})
const arr = [p1, p2, p3]
function resolveOneByOne(arr) {
  return arr.reduce((prev, cur) => {
    return prev.then(res => {
      if(res !== Symbol.for('start')) {
        console.log('prev is called', res)
      }
      return cur
    })
  }, Promise.resolve(Symbol.for('start')))
}
resolveOneByOne(arr).then(res => {
  console.log('res', res);
})

/** solution 2 */
const p4 = new Promise(resolve => {
  setTimeout(_=> {console.log('p4'), resolve()}, 1000)
})
const p5 = new Promise(resolve => {
  setTimeout(_=> {console.log('p5'), resolve()}, 1000)
})
const p6 = new Promise(resolve => {
  setTimeout(_=> {console.log('p6'), resolve()}, 1000)
})
const arr2 = [p4, p5, p6]
const resolveOneByOne2  = arr => arr.reduce((prev, cur) => prev.then(res => cur), Promise.resolve(0))
resolveOneByOne2(arr2).then(_ => {
  console.log('resolveOneByOne2 is resolved');
})