import { RangeIterable } from "./RangeIterable";
const iterator = new RangeIterable(1, 4)

for(let value of iterator)
  console.log(value)