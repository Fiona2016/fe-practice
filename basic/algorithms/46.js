// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

// 示例:

// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
function sort (arr) {
  let result = []
  const dfs = (index, tempArr) => {
    if (tempArr.length === arr.length) {
      result.push(tempArr)
      return
    }
    for (let i = 0; i < arr.length; i++) {
      if (i === index) {
        continue
      }
      tempArr.push(i)
      dfs(i, tempArr)
      tempArr.pop(i)
    }
  }
  dfs(0, [])
  return result
}
console.log(sort([1, 2, 3]))