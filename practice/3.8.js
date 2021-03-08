/**
 * 数据转换
 */
function trans (arr) {
  return arr.reduce((prev, cur) => {
    prev[cur.key] = cur.value
    return prev
  }, {})
}
const trans1 = arr => arr.reduce((prev, {key, value}) => { prev[key] = value; return prev },{})
const trans2= arr => arr.reduce((prev, {key, value}) => ({...prev, [key]: value}), {})
const arr = [
  {
    key: 'name',
    value: 'hello'
  },
  {
    key: 'age',
    value: 18
  },
  {
    key: 'grade',
    value: '5'
  }
]
console.log(trans(arr))
console.log(trans1(arr))