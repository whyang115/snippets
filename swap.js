/**
 * 不借助第三方变量,将两个数值交换
 * @param {*} a 
 * @param {*} b 
 */
function swapByAdd (a, b) {
  console.time('add')
  a = a + b
  b = a - b
  a = a - b
  console.log(a, b)
  console.timeEnd('add')
}


function swapByMinus (a, b) {
  console.time('minus')
  a = a - b
  b = a + b
  a = b - a 
  console.log(a, b)
  console.timeEnd('minus')
}

function swapByMulti (a, b) {
  console.time('multi')
  a = a * b
  b = a / b
  a = a / b
  console.log(a, b)
  console.timeEnd('multi')
}

function swapByDivide (a, b) {
  console.time('divide')
  a = a / b
  b = a * b
  a = b / a
  console.log(a, b)
  console.timeEnd('divide')
}

function swapByAnd (a, b) {
  console.time('and')
  a ^= b
  b ^= a
  a ^= b
  console.log(a, b)
  console.timeEnd('and')
}

swapByAdd (1,2)
swapByMinus (1,2)
swapByMulti (1,2)
swapByDivide (1,2)
swapByAnd (1,2)