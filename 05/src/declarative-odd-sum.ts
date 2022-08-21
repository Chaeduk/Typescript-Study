import { range } from "./range";
import { fold } from "./fold";
import { filter } from "./filter";

const numbers: number[] = range(1, 101)
const isOdd = (n: number): boolean => n%2 != 0
const result = fold(filter(numbers, isOdd), (result, value)=>result+value, 0)
console.log(result)

// 명령형 프로그래밍 vs 선언형 프로그래밍