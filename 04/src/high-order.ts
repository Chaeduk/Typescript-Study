// 고차함수 : 또 다른 함수를 반환하는 함수를 말한다

const add = (a: number): (arg0: number) => number => (b: number): number => a+b
const result = add(1)(2)
console.log(result)