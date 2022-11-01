// creating a binary tree in a static manner

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//  traversing a binary tree in a depth-first order 

// function depthFirstValues(root) {
//     let newarr = [];
//     if (root != null) {
//         const stack = [root];

//         while (stack.length > 0) {
//             const current = stack.pop();
//             newarr.push(current.value);

//             if (current.right) { stack.push(current.right); }
//             if (current.left) { stack.push(current.left); }

//         }
//     }
//     console.log(newarr);
// }

// traversing a binary tree  depth first using  recursion 

// function depthFirstValues(root){
//     if (root === null){ return [];}
//     const leftNodes  = depthFirstValues(root.left);
//     const rightNodes = depthFirstValues(root.right);

//     return [root, ...leftNodes,...rightNodes]
// }


// traversing a binary tree  breadth first style 

// function breadthFirstValues(root) {
//     const finalArr = [];
//     const queue = [root];

//     while (queue.length > 0) {
//         const current = queue.shift();

//         if (current.left) { queue.push(current.left); }
//         if (current.right) { queue.push(current.right); }
//         finalArr.push(current.value);

//     }
//     return finalArr;
// }

/**
  * function to find if a value exists in the binary tree using recursion 
 */
  

// function treeIncludesValue(root, value) {
//     if (root === null) return false;
//     if (root.value === value) return true;
//     return treeIncludesValue(root.left, value) || treeIncludesValue(root.right, value);

// }


// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');


// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// console.log(treeIncludesValue(a,'e'));

// adding all the elements of a binary tree 
// function treeSum(root) {
//     if (root === null) { return 0; }
//     const sum = root.value + treeSum(root.left) + treeSum(root.right);
//     return sum;

// }

function findMinimumValue(root) {
    if (root === null) return Infinity ;
    const leftNodes = findMinimumValue(root.left);
    const rightNodes = findMinimumValue(root.right);
    return Math.min(root.value, leftNodes, rightNodes);
}

const a = new Node(10);
const b = new Node(20);
const c = new Node(30);
const d = new Node(40);
const e = new Node(5);
const f = new Node(60);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(findMinimumValue(a))