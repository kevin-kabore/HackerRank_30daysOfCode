// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);

            return this.root;
        }

        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }

        return this.root;
    };

    // Start of function levelOrder
    this.levelOrder = function(root) {
        // Add your code here
        //initialize queue with root node
         let queue = [root]
         while(queue.length) { //if queue has length
             let node = queue.shift() //remove and store first el in queue
             process.stdout.write(node.data + ' ') // print on same line add space
             if(node.left){ // if left child
                 queue.push(node.left) // push to back of the queue
             }
             if(node.right){ //if right child
                 queue.push(node.right) // push to back of queue
             }
         }
        // To print values separated by spaces use process.stdout.write(someValue + ' ')
      }; // End of function levelOrder
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
    _input += data;
});

process.stdin.on('end', function () {
    var tree = new BinarySearchTree();
    var root = null;

    var values = _input.split('\n').map(Number);

    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }

    tree.levelOrder(root);
});
