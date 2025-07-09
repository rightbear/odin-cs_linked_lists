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

// test function toStrung()
// ( fish ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
console.log(list.toString());
