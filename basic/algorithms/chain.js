/**
 * 链表 a1 -> a2 -> a3 -> a4 -> a5
 * => a1 -> a3 -> a5 -> a2 -> a4
 */
class Node {
  constructor (v) {
    this.value = v
    this.next = null
  }
  print () {
    return this.value
  }
}

const [a1, a2, a3, a4, a5] = [new Node('a1'), new Node('a2'), new Node('a3'), new Node('a4'), new Node('a5')]
a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5

let cur = a1
while(cur) {
  console.log(cur.print())
  cur = cur.next  
}

function sort (a1) {

}

// console.log()
