/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
function ListNode(x) {
  this.val = x;
  this.next = null;
}
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @param val int整型
 * @return ListNode类
 */
function deleteNode(head, val) {
  // write code here
  //直接遍历，找到该节点，将pre和next节点连接在一起即可。
    //注意特殊输入，val是链表头端的情况;注意输入的val是值不是节点，与节点.val进行比较
    if (head.val === val) {
        return (head = head.next);
    }
    let cur = head;
    let pre = null;
    while (cur.val !== val) {
        pre = cur;
        cur = cur.next;
    }
    pre.next = cur.next;
    return head;
}

let item1 = new ListNode(2);
let item2 = new ListNode(3);
let item3 = new ListNode(4);
let item4 = new ListNode(0);
let item5 = new ListNode(1);
item1.next = item2;
item2.next = item3;
item3.next = item4;
item4.next = item5;
item5.next = null;

console.log(deleteNode(item1, 0));

// module.exports = {
//   deleteNode: deleteNode,
// };
