/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
    return 0;
};

function calcCombination(n:number, k:number):number  {
    if (n == k) return 1;
    let upper = n;
    let i = 1;
    while(i <= k+1) {
        console.log([n, i])
        upper *= (n- i++)
    }
    let lower = k;
    let j = 1;
    while(k - j > 0) {
        lower *= (k - j++) 
    }
    return upper / lower;
}
// @lc code=end

test('calcCombination', ()=> {
    expect(calcCombination(1, 1)).toBe(1);
    expect(calcCombination(2, 1)).toBe(2);
    expect(calcCombination(3, 1)).toBe(3);
    expect(calcCombination(4, 1)).toBe(4);

    expect(calcCombination(2, 2)).toBe(1);
    expect(calcCombination(3, 2)).toBe(2);
    expect(calcCombination(4, 2)).toBe(3);
})