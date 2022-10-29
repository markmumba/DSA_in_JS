// using an array to know if word is palindrome

// let arr = [];
// let words = "racecar";
// let reverse = "";

// for (let i = 0; i < words.length; i++) {
//     arr.push(words[i]);
// }

// for (let i = 0; i < words.length; i++) {
//     reverse += arr.pop();
// }

// if (reverse === words) {
//     console.log(reverse,"is a palindrome ");
// }
// else {
//     console.log (reverse,"Sorry buddy seems the word is not a palindrome");
// }

// creating a stack 

class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};

        this.push = function () {
            for (let i = 0; i < arguments.length; i++) {
                this.storage[this.count] = arguments[i];
                this.count++;   
            }
            console.log(this.storage)
        };
        this.pop = function () {
            this.count --;
            delete this.storage[this.count];
            console.log(this.storage);
        };

        this.size = function () {
            let size = Object.keys(this.storage).length;
            console.log(size);
        };
        this.peek = function () {
            let last = this.storage[this.count-1];
            console.log(last);
        }
    }
}

let newStack = new Stack();
newStack.push(1,2,3,4,5,6,7,8,9,10,11);
newStack.pop();
newStack.size();
newStack.peek();


