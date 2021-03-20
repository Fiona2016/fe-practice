/** 两数相加
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
   let map = {}
   for(let i = 0; i < nums.length; i ++ ) {
     const n = nums[i]
     if(map[n] !== undefined) {
       return [map[n], i]
     } else {
       map[target - n] = i
     }
   }
}

const test = (arr, target) => console.log(twoSum(arr, target))
test([2,7,11,15], 9) // 7:0 
test([3,2,4], 6)
test([3,3], 6)
