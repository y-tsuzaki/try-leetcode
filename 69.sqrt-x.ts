/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
    let start = 0;
    let end = x;
    if (x == 1) return 1;

    while( end - start > 1) {
        let center = start + Math.floor((end - start) /2);
        const sq = center * center;
        if (sq == x) {
            return center;
        }
        if (sq < x) {
            start = center;
        } else {
            end = center;
        }
    }

    return start;
};
// @lc code=end

test('default', () => {
    expect(mySqrt(1)).toBe(1);
    expect(mySqrt(2)).toBe(1);
    expect(mySqrt(25)).toBe(5);
    expect(mySqrt(9)).toBe(3);
    expect(mySqrt(8)).toBe(2);
})

