/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start


function plusOne(digits: number[]): number[] {
    for(let i = digits.length-1; i >= 0; i--) {
        digits[i] ++;
        if (digits[i] > 9) {
            digits[i] = 0;
        } else {
            // carryがないならすぐ返してOK
            return digits;
        }
    }
    
    digits.unshift(1);
    return digits;
};

// @lc code=end

test("default", () => {
    expect(plusOne([1,2,3])).toStrictEqual([1,2,4]);
    expect(plusOne([4,3,2,1])).toStrictEqual([4,3,2,2]);
    expect(plusOne([0])).toStrictEqual([1]);
    expect(plusOne([0, 0])).toStrictEqual([0, 1]);
})
