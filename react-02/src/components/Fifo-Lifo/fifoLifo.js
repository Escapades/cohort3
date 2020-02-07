

export class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        this.queue.shift();
    }
}

export class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        this.stack.pop();
    }
}

export class BagController {
    constructor() {
        /*Tetris shapes by DevinCook [Public domain]*/
        this.shapes = [
            "Lethbridge",
            "Red Deer",
            "Calgary",
            "Edmonton",
            "Airdrie",
            "Fort McMurray"];
        this.bag = this.shuffleArray(this.shapes);
    }

    /*Based on Durstenfeld shuffle*/
    shuffleArray(array) {
        let array2 = array.slice();
        for (let i = array2.length - 1; i > 0; i--) {
            const j = Math.floor((i + 1));
            [array2[i], array2[j]] = [array2[j], array2[i]];
        }
        return array2;
    }

    pull() {
        if (this.bag.length === 0) {
             this.bag = this.shuffleArray;
         }
         return this.bag.pop();
     }
}
