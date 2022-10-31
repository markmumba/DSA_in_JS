class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function depthFirstValues(root) {
    const finalArray = [];
    const stack = [root];
    while (stack.length > 0) {
        const currentValue = stack.pop();
        finalArray.push(currentValue.value);

        if (currentValue.right) { stack.push(currentValue.right); }
        if (currentValue.left) { stack.push(currentValue.left); }
    }
    return finalArray;
}

const team = new Node('Team');
const redbull = new Node('Redbull');
const mercedes = new Node('Mercedes');
const max = new Node('Max');
const perez = new Node('Perez');
const max_country = new Node('Netherlands');
const max_age = new Node(24);
const perez_country = new Node('Mexico');
const perez_age = new Node(32);
const lewis = new Node('Lewis');
const george = new Node('George');
const lewis_country = new Node('Uk');
const lewis_age = new Node(35);
const george_country = new Node('Uk');
const george_age = new Node(23);


team.left = redbull;
team.right = mercedes;
redbull.left = max;
redbull.right = perez;
mercedes.left = lewis;
mercedes.right = george;
max.left = max_country;
max.right = max_age;
perez.left = perez_country;
perez.right = perez_age;
lewis.left = lewis_country;
lewis.right = lewis_age;
george.left = george_country;
george.right = george_age;


console.log(depthFirstValues(team));



//                         teams
//                    /            \
//                redbull          mercedes
//               /      \             /   \
//            max       perez       lewis george
//          /    \      /    \       / \   / \ 
//  nerthlands   24   mexico  32    uk  35 uk 23