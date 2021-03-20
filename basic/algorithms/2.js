/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let [cur, flag] = [null, false]
  let root = cur
  while (l1 || l2 || flag) {
    const s = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + flag
    flag = s > 9
    const node = new ListNode(flag ? s - 10 : s)
    if (!root) {
      cur = node
      root = cur
    } else {
      cur.next = node
      cur = cur.next
    }
    l1 = l1 && l1.next || null
    l2 = l2 && l2.next || null
  }
  return root
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


const p = arr => {
  const node = new ListNode(arr[0])
  const h = node
  arr.reduce((prev, cur, index) => {
    if (index === 0) {
      return prev
    }
    prev.next = new ListNode(cur)
    return prev.next
  }, node)
  return h
}
const test = (l1, l2) => console.log(addTwoNumbers(l1, l2))
test(p([2, 4, 3]), p([5, 6, 4]))
test(p([2]), p([5, 6]))
