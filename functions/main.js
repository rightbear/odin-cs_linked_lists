#!/usr/bin/node

import { LinkedList } from "./classes.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

// test function append()
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// test function prepend()
list.prepend("fish");

// test function toStrung()
// ( fish ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
console.log(list.toString());

// test funciotn size()
// Total number of nodes: 7
console.log(`Total number of nodes: ${list.size()}`);

// test function head()
// The first node: ( fish )
console.log(`The first node: ${list.head()}`);

// test function tail()
// The first node: ( turtle )
console.log(`The last node: ${list.tail()}`);

// test function at()
//The node at index 5: ( hamster )
console.log(list.at("javascript"));
console.log(list.at(0));
console.log(list.at(8));
console.log(`The node at index 5: ${list.at(5)}`);

// test function pop()
list.pop();
list.pop();

// ( fish ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> null
console.log(list.toString());

// test function contains()
console.log(`Is ( snake ) in the list? Answer: ${list.contains("snake")}`);
console.log(`Is ( cat ) in the list? Answer: ${list.contains("cat")}`);

// test function find()
console.log(`The index of ( snake ): ${list.find("snake")}`);
console.log(`The index of ( cat ): ${list.find("cat")}`);

// test function insertAt()
list.insertAt("hedgehog", 1);
// ( hedgehog ) -> ( fish ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> null
console.log(list.toString());
list.insertAt("peacock", 6);
// ( hedgehog ) -> ( fish ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( peacock ) -> ( hamster ) -> null
console.log(list.toString());
list.insertAt("mink", 8);
// ( hedgehog ) -> ( fish ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( peacock ) -> ( hamster ) -> null
console.log(list.toString());

// test function removeAt()
list.removeAt(1);
// ( fish ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( peacock ) -> ( hamster ) -> null
console.log(list.toString());
list.removeAt(7);
// ( fish ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( peacock ) -> ( hamster ) -> null
console.log(list.toString());
list.removeAt(6);
// ( fish ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( peacock ) -> null
console.log(list.toString());
