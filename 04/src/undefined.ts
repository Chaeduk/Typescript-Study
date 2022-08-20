interface INameable {
  name: string
}

function getName(o: INameable){
  return o != undefined ? o.name : 'unknown name'
}

let n = getName(undefined)
// undefined는 최하위 타입이다 따라서 INameable을 상속하는 자식 타입으로 간주한다
console.log(n)
console.log(getName({name: 'Jack'}))