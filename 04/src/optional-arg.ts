function fn(arg1: string, arg?: number) { console.log(`arg: ${arg}`)}

fn('hello', 1)
fn('hello')

type OptionalArgFunc = (arg0: string, arg1?: number) => void

