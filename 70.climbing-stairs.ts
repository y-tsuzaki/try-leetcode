/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */
// 答え見なかったらわからんかった
// i-1とi-2の足し算て、問題文から気付けるのか？
// プロコンあるある問題として閃けばいいんだろうか。
// まだわからない。

// @lc code=start

function climbStairs(n: number): number {
    let arr = [1,2,3];
    let i: number;

    for(i = 3; i<=n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }

    return arr[n-1];
};

// memo 化アプローチ
// const memo = [];
// function climbStairs(n: number): number {
//     if (n <= 0) {
//         return 0;
//     }
//     if (n === 1) {
//         return 1;
//     }
//     if (n === 2) {
//         return 2;
//     }
//     if(memo[n]) {
//         return memo[n];
//     }
//     memo[n] = climbStairs(n -1) + climbStairs(n-2);
//     return memo[n]
// };

// @lc code=end

test('basic', ()=> {
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
    expect(climbStairs(4)).toBe(5);
    expect(climbStairs(5)).toBe(8);
} )