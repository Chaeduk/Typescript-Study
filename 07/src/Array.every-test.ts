const isAllTrue = (values: boolean[]) => values.every(value => value == true)
// 배열의 모든 아이템이 어떤 조건을 만족하면 true를 반환한다

console.log(
  isAllTrue([true, true, true]),
  isAllTrue([false, true, true])
)