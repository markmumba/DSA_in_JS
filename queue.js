class Queue {
    constructor() {
        this.collections = [];

        this.print = function () {
            return this.collections;

        }
        this.enqueue = function () {
            for (let i = 0; i < arguments.length; i++) {
                this.collections.push(arguments[i]);
            }
            return this.collections;
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

};


let newQueue = new Queue;
console.log (newQueue.enqueue(1,2,3,4,5,6,7,8,9,10,11,12));
console.log (newQueue.dequeue());
console.log (newQueue.size());