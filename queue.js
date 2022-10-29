// class Queue {
//     constructor() {
//         this.collections = [];

//         this.print = function () {
//             return this.collections;

//         }
//         this.enqueue = function () {
//             for (let i = 0; i < arguments.length; i++) {
//                 this.collections.push(arguments[i]);
//             }
//             return this.collections;
//         }
//         this.dequeue = function () {

//             return this.collections.shift();
//         }
//         this.size = function () {
//             let size = this.collections.length;
//             return size
//         }
//         this.isEmpty = function () {
//             return (this.collections.length === 0);
//         }
//     }

// };


// let newQueue = new Queue;
// console.log (newQueue.enqueue(1,2,3,4,5,6,7,8,9,10,11,12));
// console.log (newQueue.dequeue());
// console.log (newQueue.size());


class PriorityQueue {
    constructor() {
        this.collections = [];

        this.print = function () {
            return this.collections;

        }
        this.enqueue = function (value) {
            if (this.isEmpty()) {
                this.collections.push(value);
            } else {
                let added = false;
                for (let i = 0; i < this.collections.length; i++) {
                    if (value[1] < this.collections[i][1]) {
                        this.collections.splice(i, 0, value);
                        added = true;
                        break;
                    }
                }
                if (!added) {
                    this.collections.push(value);
                }
            }

        }
        this.dequeue = function () {

            return this.collections.shift();
        }
        this.size = function () {
            let size = this.collections.length;
            return size
        }
        this.isEmpty = function () {
            return (this.collections.length === 0);
        }
    }
}

let newQueue = new PriorityQueue();

newQueue.enqueue(['George', 4]);
newQueue.enqueue(['panther', 9]);
newQueue.enqueue(['elon', 3]);
newQueue.enqueue(['Markian', 1]);
newQueue.enqueue(['Lionel', 8]);
console.log(newQueue.print());