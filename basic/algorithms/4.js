/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
   let [p1, p2, r] = [0,0,[]]
   while(p1 < nums1.length || p2 < nums2.length) {
     if (p1 === nums1.length || nums1[p1] > nums2[p2]) {
       r.push(nums2[p2++])
     } else {
       r.push(nums1[p1++])
     }
   }
   const len = r.length
   return len % 2 === 0 ? (r[len / 2]  + r[len / 2 - 1]) / 2 : r[(len - 1) / 2]
};
const test = (nums1, nums2) => console.log(findMedianSortedArrays(nums1, nums2))

// test([1, 2, 5, 9, 16], [3, 4])
// test([1, 2, 5, 9, 16], [])
test([0, 0], [0, 0])