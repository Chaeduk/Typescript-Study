export function* gen(){
  let count = 5
  let select = 0
  while(count--){
    select = yield `you select ${select}`
    // yield 연산자의 반환값은 반복기의 next 메서드 호출 때 매개변수에 전달되는 값이다
  }
}

export const random = (max:number, min:number=0) => Math.round(Math.random()*(max-min))+min