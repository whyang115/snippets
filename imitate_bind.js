// bind模拟实现

let bind = function (fn) {
  return function () {
    let args = Array.from(arguments)
    return fn.apply(args[0], args.slice(1))
  }
}

let a = {
  a: 1
}

let b = {
  a: 2,
  c: function (e) {
    return this.a + e
  }
}
console.log(bind(b.c)(a, 1)) //2

//方法可直接定义在Function原型上
Function.prototype.newBind = function () {
  let args = Array.from(arguments)
  return () => this.apply(args[0], args.slice(1))
}


let e = {
  a: 1
}

let f = {
  a: 2,
  c: function (e) {
    return this.a + e
  }
}

console.log(f.c.newBind(e, 1)() + 1) //2
