/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
// function maxSubArray(nums: number[]): number {
//     const len = nums.length;
//     let max = -2 * Math.pow(10, 32);

//     for (let i=0; i< len; i++) {
//         let sum = 0;
//         for (let j=i; j< len; j++) {
//             sum += nums[j];
//             max = Math.max(sum, max);
//         }
//     }
//     return max;
// };

// copy from https://leetcode.com/problems/maximum-subarray/discuss/139218/Javascript-very-clear-and-short-DP-solution
var maxSubArray = function(nums) {
    for (let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    console.log(nums);
    return Math.max(...nums);
};
// @lc code=end


test('basic', ()=> {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
    expect(maxSubArray([1])).toBe(1);
    expect(maxSubArray([0])).toBe(0);
    expect(maxSubArray([-1])).toBe(-1);
})