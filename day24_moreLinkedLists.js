function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){
  this.removeDuplicates=function(head){
  //Write your code here
  if(head.data === null ) {
      return head;
  } else {
      let current = head
      while(current.next) {
          if(current.data === current.next.data) {
              current.next = current.next.next;
          } else {
              current = current.next;
          }
      }
      return head;
    }
  }
}
