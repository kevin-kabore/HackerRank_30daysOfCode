// Write the following declarations and implementations:
//
// Two instance variables: one for your , and one for your .
// A void pushCharacter(char ch) method that pushes a character onto a stack.
// A void enqueueCharacter(char ch) method that enqueues a character in the  instance variable.
// A char popCharacter() method that pops and returns the character at the top of the  instance variable.
// A char dequeueCharacter() method that dequeues and returns the first character in the  instance variable.


// My code
function Solution(){
    this.stack = []
    this.queue = []

    this.pushCharacter = function(c) {
        this.stack.push(c)
    }
    this.enqueueCharacter = function(c) {
        this.queue.push(c)
    }
    this.popCharacter = function(c) {
        return this.stack.pop(c)
    }
    this.dequeueCharacter = function(c){
        return this.queue.shift(c)
    }
}



// Hardcoded Solution to check if isPalindrome
function main(){
    // read the string s
    var s=readLine();
    var len=s.length;
    // create the Solution class object p
    var obj=new Solution();
    //push/enqueue all the characters of string s to stack
    for(var i=0;i<len;i++){
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }

    var isPalindrome=true;
    /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

    for(var i=0;i<len/2;i++){
        if(obj.popCharacter()!=obj.dequeueCharacter()){
            isPalindrome=false;
          	break;
        }
    }
    //finally print whether string s is palindrome or not

    if(isPalindrome)
        console.log("The word, "+s+", is a palindrome.");
    else
        console.log("The word, "+s+", is not a palindrome.");
}
