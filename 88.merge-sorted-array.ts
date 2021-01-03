/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const copyNum1 = nums1.concat();
    let p1:number =0, p2:number = 0;
    for (let i =0; i<nums1.length; i++) {
        if (p2 >= n) {
            nums1[i] = copyNum1[p1++];
            continue;
        }
        if (p1 >= m) {
            nums1[i] = nums2[p2++];
            continue;
        }
        if ( copyNum1[p1] > nums2[p2]) {
            nums1[i] = nums2[p2++];
        } else if (copyNum1[p1] <= nums2[p2] ) {
            nums1[i] = copyNum1[p1++];
        }
    }
};
// @lc code=end

test('', ()=>{
    let nums1 = [1,2,3,0,0,0];
    merge(nums1, 3, [2,5,6], 3);
    expect(nums1).toStrictEqual([1,2,2,3,5,6]);
})

