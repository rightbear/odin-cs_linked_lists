#!/usr/bin/node

import { LinkedList } from "./classes.js"

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