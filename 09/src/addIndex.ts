import * as R from 'ramda'

const addIndex = R.pipe(
  R.addIndex(R.map)(R.add),
  R.tap(a => console.log(a))
)

const newNumbers = addIndex(R.range(1, 10))
// 1 2 3 4 5 6 7 8 9
// 1 3 5 7 9 11 13 15 17