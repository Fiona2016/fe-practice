/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let [i, j, area] = [0, height.length - 1, 0]
  while (i < j) {
    area = Math.max(area, (j - i) * Math.min(height[i], height[j]))
    height[i] < height[j] ? i ++ : j--
  }
  return area
}

const test = height => console.log(maxArea(height))
test([1,1])
test([4,3,2,1,4])
test([1,2,1])