function ListNode(x){
    this.val = x;
    this.next = null;
}
function ReverseList(pHead)
{
    // write code here
    console.log(pHead);
    let res = new ListNode();
    while(true){
        if(pHead?.val){
            o.unshift(pHead.val)
        }else{
            break;
        }
        pHead = pHead.next;
    }
    console.log(o)
    console.log({...o});
}
let l = new ListNode();
l.val=1;
let ll = new ListNode();
ll.val = 2;
let lll = new ListNode();
lll.val = 3;
l.next = ll;
ll.next = lll;
ReverseList(l);