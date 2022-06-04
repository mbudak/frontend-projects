/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
   let ret = [];
  for (i = 0; i < nums.length; i++){
    ret.push(nums[nums[i]])
  }
  return ret;
};

let input = [0,2,1,5,3,4];
var result = buildArray(input);
console.log('result -> ', input, result)

let input2 = [5,0,1,2,3,4]
var result = buildArray(input2);
console.log('result -> ', input2, result)