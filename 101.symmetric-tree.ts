/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null || (root.left === null && root.right === null)) {
    return true;
  }
  let left = root.left;
  let right = root.right;

  let leftPool = [];
  let rightPool = [];

  while (true) {
    console.log({
      l: left?.val,
      r: right?.val,
      poolL: leftPool,
      poolR: rightPool,
    });

    if (left?.val !== right?.val) {
      console.log("val is not same!");
      return false;
    }

    if (left?.right != null) {
      leftPool.push(left.right);
    }
    if (left?.left != null) {
      left = left.left;
    }

    if (left == null && leftPool.length > 0) {
      left = leftPool.pop();
    } else {
      left = null;
    }

    if (right?.left != null) {
      rightPool.push(right.left);
    }

    if (right?.right != null) {
      right = right.right;
    }

    if (right == null && rightPool.length > 0) {
      right = rightPool.pop();
    } else {
      right = null;
    }

    if (
      right == null &&
      left == null &&
      rightPool.length === 0 &&
      leftPool.length === 0
    ) {
      return true;
    }
  }
}
// @lc code=end

// FIXME: テストデータ作るところが間違ってるのでこのテストは意味ない
test("pre test", () => {
  expect(arryToTreeNode([1, 2, 3])).toStrictEqual(
    new TreeNode(1, new TreeNode(2), new TreeNode(3))
  );

  expect(arryToTreeNode([1, 2, 2, 3, 4, 4, 3])).toStrictEqual(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3))
    )
  );
});

test("default", () => {
  expect(isSymmetric(arryToTreeNode([1]))).toBe(true);
  expect(
    isSymmetric(
      arryToTreeNode([9, -42, -42, null, 76, 76, null, null, 13, null, 13])
    )
  ).toBe(false);
  expect(isSymmetric(arryToTreeNode([1, 2, 2, 3, 4, 4, 3]))).toBe(true);
  expect(isSymmetric(arryToTreeNode([2, 3, 3, 4, 5, null, 4]))).toBe(false);
  expect(isSymmetric(arryToTreeNode([1, 2, 2]))).toBe(true);
});

// FIXME: nullなnodeの下に子が生えないので、単純にindexをx2したりしても子を求められなかった
function arryToTreeNode(arr: number[]): TreeNode | null {
  return makeNodeSub(arr, 0);
}

function makeNodeSub(arr: number[], i: number): TreeNode | null {
  if (arr.length <= i) {
    return null;
  }
  let val = arr[i];
  let leftIndex = (i + 1) * 2 - 1;
  let rightIndex = (i + 1) * 2 + 1 - 1;
  if (i === 0) {
    leftIndex = 1;
    rightIndex = 2;
  }
  return new TreeNode(
    val,
    makeNodeSub(arr, leftIndex),
    makeNodeSub(arr, rightIndex)
  );
}

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
