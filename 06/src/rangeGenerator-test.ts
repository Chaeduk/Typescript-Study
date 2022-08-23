import { rangeGenerator } from "./rangeGenerator";

const iterator = rangeGenerator(1, 4)
while(1){
  const {value, done} = iterator.next()
  if(done) break
  console.log(value)
}

for(let value of rangeGenerator(4, 7))
  console.log(value)