/**
 * 发布订阅模式实现
 */
class PubSub {
  constructor() {
    this.events = {}
  }

  /**
   * 通过此函数注册回调函数
   * @param {*} key 事件名
   * @param {*} cb 回调函数
   */
  add(key, cb) {
    if (!this.events[key]) {
      this.events[key] = [];
      this.events[key].push(cb)
    } else {
      this.events[key].push(cb)
    }
  }

  /**
   * 触发对应注册事件,可接受回调
   * @param {*} key 事件名 
   */
  emit(key) {
    let args = Array.from(arguments),
      cbList = this.events[key]
    for (let cb in cbList) {
      cbList[cb].apply(this, args.slice(1))
    }
    typeof args.slice(-1)[0] == 'function' && args.slice(-1)[0]()
  }
  /**
   * 移除相应事件,如不传事件名则移除所有事件
   * @param {*} key 事件名 
   */
  remove(key) {
    let cbList = this.events[key],
      removeList = Array.from(arguments).slice(1)
    if (!cbList) return false
    if (!removeList) {
      cbList = []
    } else {
      for (let i = 0, len = removeList.length; i < len; i++) {
        let index = cbList.indexOf(removeList[i])
        if (index > -1) {
          cbList.splice(index, 1)
        }
      }
    }
  }
  /**
   * 只调用一次事件,调用后即将回调函数清空
   * @param {*} key 事件名
   */
  once(key) {
    this.emit(key)
    this.events[key] = []
  }
}

let event = new PubSub()
event.add('hello', word => {
  console.log('hello ' + word)
})


event.emit('hello', 'world', function () {
  console.log('success')
})
