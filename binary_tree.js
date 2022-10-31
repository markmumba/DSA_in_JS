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

// traversing a binary tree isng recursion 

// function depthFirstValues(root){
//     if (root === null){ return [];}
//     const leftNodes  = depthFirstValues(root.left);
//     const rightNodes = depthFirstValues(root.right);

//     return [root, ...leftNodes,...rightNodes]
// }

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




const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(breadthFirstValues(a));