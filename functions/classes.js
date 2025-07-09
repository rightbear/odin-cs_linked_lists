export { LinkedList };

class LinkedList {
    constructor() {
        this.headNode = null; // LinkedList "has a" Node
    }

    // add a new node containing value to the end of the list
    append(value) {
        if(this.headNode === null) {
            this.prepend(value);
        }
        else {
            let current = this.headNode;
            while(current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = new Node(value);
        }
    }

    // add a new node containing value to the start of the list
    prepend(value) {
        this.headNode = new Node(value, this.headNode);
    }

    // return the total number of nodes in the list
    size() {
        let size = 0;
        let current = this.headNode;

        while(current !== null) {
            size += 1;
            current = current.nextNode;
        }

        return size;
    }

    // return the first node in the list
    head() {
        if(this.headNode === null) {
            return 'null';
        }
        else {
            return `( ${(this.headNode).value} )`;
        }
    }

    // return the last node in the list
    tail(){
        if(this.headNode === null) {
            return 'null';
        }
        else {
            let current = this.headNode;
            while(current.nextNode !== null) {
                current = current.nextNode;
            }
            return `( ${(current.value)} )`;
        }
    }

    // return the node at the given index (the index of the first node is  1).
    at(index) {
        if(this.size() === 0) {
            console.log('The list is empty!');
            return 'null';
        }
        else if(Number.isInteger(index) === false || index > this.size() || index < 1){
            console.log('You cannot access illegal index!');
            return 'null';
        }
        else {
            let tempIndex = 1;
            let current = this.headNode;

            while(tempIndex < index) {
                tempIndex += 1;
                current = current.nextNode;
            }
            return `( ${(current.value)} )`;
        }
    }

    // represent your LinkedList objects as strings
    toString() {
        let result = "";
        let current = this.headNode;

        while(current !== null) {
            result = result.concat(`( ${current.value} ) -> `);
            current = current.nextNode;
        }
        result = result.concat('null');

        return result;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
};