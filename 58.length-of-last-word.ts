/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
    let lenBackup = 0;
    let len = 0;
    for(let i=0; i< s.length; i++) {
        if (s.charAt(i) === ' ') {
            lenBackup = len === 0 ? lenBackup : len;
            len = 0;
        } else {
            len ++;
        }
    }
    
    return len === 0 ? lenBackup : len;
};
// @lc code=end


test('default', () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
    expect(lengthOfLastWord("a ")).toBe(1);
    expect(lengthOfLastWord(" ")).toBe(0);
    
});
// function lengthOfLastWord(s: string): number {
//     s = s.trimEnd();
//     const splited = s.split(" ");
//     return splited[splited.length - 1].length;
// };