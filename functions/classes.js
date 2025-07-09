export { LinkedList };

class LinkedList {
  constructor() {
    this.headNode = null; // LinkedList "has a" Node
  }

  // add a new node containing value to the end of the list
  append(value) {
    // deal with head node seperately
    if (this.headNode === null) {
      this.prepend(value);
    } else {
      let current = this.headNode;
      while (current.nextNode !== null) {
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

    while (current !== null) {
      size += 1;
      current = current.nextNode;
    }

    return size;
  }

  // return the first node in the list
  head() {
    if (this.headNode === null) {
      return null;
    } else {
      return `( ${this.headNode.value} )`;
    }
  }

  // return the last node in the list
  tail() {
    if (this.headNode === null) {
      return null;
    } else {
      let current = this.headNode;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      return `( ${current.value} )`;
    }
  }

  // return the node at the given index (the index of the first node is  1).
  at(index) {
    if (this.headNode === null) {
      console.log("The list is empty!");
      return null;
    } else if (Number.isInteger(index) === false || index < 1) {
      console.log("You cannot access illegal index!");
      return null;
    } else {
      let tempIndex = 1;
      let current = this.headNode;

      while (tempIndex < index) {
        tempIndex += 1;
        current = current.nextNode;
        // the situation of tempIndex > this.size()
        if (current === null) {
          console.log("You cannot access illegal index!");
          return null;
        }
      }
      return `( ${current.value} )`;
    }
  }

  // remove the last element from the list
  pop() {
    if (this.headNode === null) {
      console.log("The list is already empty!");
    } else {
      // deal with head node seperately
      if (this.headNode.nextNode === null) {
        this.headNode = this.headNode.nextNode;
      } else {
        let previous = null,
          current = this.headNode;
        while (current.nextNode != null) {
          previous = current;
          current = current.nextNode;
        }
        previous.nextNode = current.nextNode;
      }
    }
  }

  // return true if the passed in value is in the list and otherwise returns false
  contains(value) {
    if (this.headNode === null) {
      console.log("The list is already empty!");
      return false;
    } else {
      let current = this.headNode;

      while (current != null) {
        if (current.value === value) {
          return true;
        } else {
          current = current.nextNode;
        }
      }
      return false;
    }
  }

  // return the index of the node containing value, or null if not
  find(value) {
    if (this.headNode === null) {
      console.log("The list is already empty!");
      return null;
    } else {
      let current = this.headNode;
      let tempIndex = 1;

      while (current != null) {
        if (current.value === value) {
          return tempIndex;
        } else {
          current = current.nextNode;
          tempIndex += 1;
        }
      }
      return null;
    }
  }

  // inserts a new node with the provided value at the given index
  // the position of insertion is one position "before" the specified index
  insertAt(value, index) {
    if (this.headNode === null) {
      console.log("The list is empty!");
      return null;
    } else if (Number.isInteger(index) === false || index < 1) {
      console.log("You cannot access illegal index!");
      return null;
    } else {
      // deal with head node seperately
      if (index === 1) {
        this.prepend(value);
      } else {
        let previous = null,
          current = this.headNode;
        let tempIndex = 1;

        while (tempIndex < index) {
          tempIndex += 1;
          previous = current;
          current = current.nextNode;
          // the situation of tempIndex > this.size()
          if (current === null) {
            console.log("You cannot access illegal index!");
            return null;
          }
        }
        previous.nextNode = new Node(value, current);
      }
    }
  }

  // remove the node at the given index
  removeAt(index) {
    if (this.headNode === null) {
      console.log("The list is empty!");
      return null;
    } else if (Number.isInteger(index) === false || index < 1) {
      console.log("You cannot access illegal index!");
      return null;
    } else {
      // deal with head node seperately
      if (index === 1) {
        this.headNode = this.headNode.nextNode;
      } else {
        let previous = null,
          current = this.headNode;
        let tempIndex = 1;

        while (tempIndex < index) {
          tempIndex += 1;
          previous = current;
          current = current.nextNode;
          // the situation of tempIndex > this.size()
          if (current === null) {
            console.log("You cannot access illegal index!");
            return null;
          }
        }
        previous.nextNode = current.nextNode;
      }
    }
  }

  // represent your LinkedList objects as strings
  toString() {
    let result = "";
    let current = this.headNode;

    while (current !== null) {
      result = result.concat(`( ${current.value} ) -> `);
      current = current.nextNode;
    }
    result = result.concat("null");

    return result;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
