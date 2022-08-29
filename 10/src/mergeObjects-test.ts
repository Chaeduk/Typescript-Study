import { mergedObjects } from "./mergeObjects";

type INameable = {name: string}
type IAgeable = {age: number}

const nameAndAge: INameable & IAgeable = mergedObjects({name: 'Jack'}, {age: 32})
console.log(nameAndAge)