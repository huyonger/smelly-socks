function ListNode(x) {
    this.val = x;
    this.next = null;
}

/**
  * 
  * @param head ListNode类 
  * @param m int整型 
  * @param n int整型 
  * @return ListNode类
  */
function reverseBetween(head, m, n) {
    // write code here
    let dummyNode = new ListNode(-1)
    dummyNode.next = head
    let pre = dummyNode
    // 1.定位left前一个节点 left = pre.next
    for (let i = 0; i < m - 1; i++) {
        pre = pre.next
    }
    let cur = pre.next
    for (let i = 0; i < n - m; i++) {
        let next = cur.next
        cur.next = next.next
        next.next = pre.next
        pre.next = next
    }
    return dummyNode.next

}

let head = new ListNode(1)
let node1 = new ListNode(2)
let node2 = new ListNode(3)
let node3 = new ListNode(4)
let node4 = new ListNode(5)
head.next = node1
node1.next = node2
node2.next = node3
node3.next = node4

reverseBetween(head, 2, 4)