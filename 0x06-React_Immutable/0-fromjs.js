const {List, Map} = require("immutable");
let list = List.of(1,2,3);
let list2 = list.push(4)
console.log(list)
console.log(list2)

const alpha = Map({ a: 1, b: 2, c: 3, d: 4 });
const time = alpha.map((i, v) => v.toUpperCase()).join();
console.log(time)