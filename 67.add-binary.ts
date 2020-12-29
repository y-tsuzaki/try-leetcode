/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    if (b.length > a.length) {
        // swap
        let tmp = a;
        a = b;
        b = tmp;
    }

    let added: string = "";
    let carry: boolean = false;
    for (let i=0; i < a.length; i++) {
        let addOneDigit = 0;
        a[a.length - 1 - i] === '1' ? addOneDigit++ : null;
        carry ? addOneDigit++ : null;

        (i < b.length && b[b.length - 1 - i] === '1') ? addOneDigit++ : null;
        

        if (addOneDigit == 2) {
            addOneDigit = 0;
            carry = true;
        } else if (addOneDigit == 3) {
            addOneDigit = 1;
            carry = true;
        } else {
            carry = false;
        }
        added = addOneDigit + added;
    }
    if (carry) {
        return '1' + added;
    }
    return added;
};
// @lc code=end

test('default', ()=> {
    expect(addBinary('1111', '0010')).toBe('10001');
    expect(addBinary('11', '1')).toBe('100');
    expect(addBinary('1010', '1011')).toBe('10101');
});