// type Matric = number[][]
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let target = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        for (let m = 0; m < matrix[i].length; m++) {
          target.push([i, m])
        }
        for (let n = 0; n < matrix.length; n++) {
          target.push([n, j])
        }
      }
    }
  }
  for (let p = 0; p < target.length; p++) {
    const [i, j] = target[p]
    matrix[i][j] = 0
  }
  return matrix
};
const test = matric => console.log(setZeroes(matric))
test([[1, 1, 1], [1, 0, 1], [1, 1, 1]])
test([[0,1,2,0],[3,4,5,2],[1,3,1,5]])