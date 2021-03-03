/**
 * 求数字组合
 */
function targettMatch (arr, target) {
  let result = []
  const dfs = (index, sum, tempArr) => {
    if (sum === target) {
      result.push(tempArr)
    }
    if (sum > target) {
      return
    }
    for (let i = index; i < arr.length; i ++) {
      tempArr.push(arr[i])
      dfs(i, sum += arr[i], tempArr)
      tempArr.pop() // why pop?
    }
  }
  dfs(0, 0, [])
  return result
}
console.log(targettMatch([2, 3, 6], 7))