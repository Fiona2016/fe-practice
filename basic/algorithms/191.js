/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
   let r = 0
   for (let i = 0; i < 32; i++) {
     if (n & 1 << i) {
       r ++
     }
   }
   return r    
};
var hammingWeight2 = function (n) {
  let r = 0
  while(n) {
    n = n & (n-1)
    r ++
  }
  return r
}

const test = n => console.log(hammingWeight2(n))
test(00000000000000000000000000001011)