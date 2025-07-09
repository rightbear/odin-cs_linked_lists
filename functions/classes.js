export { LinkedList };

class LinkedList {
    constructor() {
        this.head = null; // LinkedList "has a" Node
    }

    // add a new node containing value to the end of the list
    append(value) {
        if(this.head === null) {
            this.head = new Node(value);
        }
        else {
            let current = this.head;
            while(current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = new Node(value);
        }
    }

    // represent your LinkedList objects as strings
    toString() {
        let result = "";
        let current = this.head;

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