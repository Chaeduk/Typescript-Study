const names: string[] = ['Jack', 'Jane', 'Steve']

for(let index in names){
  const name = names[index]
  console.log(`[${index}]: ${name}`)
}

const jack = {name: 'Jack', age: 32}
for(let property in jack){
  console.log(`${property}: ${jack[property]}`)
}