function defineReactive (data, key, val) {
  observe(val)
  const dep = new Dep()
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    set: function (v) {
      val = v
      dep.notify()
      console.log('set is called')
    },
    get: function () {
      if (Dep.target) {
        dep.addSub(Dep.target) // 秒啊！ 在这里拿到watcher
      }
      return val
    }
  })
}

function observe(data) {
  if (!data || typeof data !== 'object') {
    return 
  }
  Object.keys(data).forEach(k => {
    defineReactive(data, k, data[k])
  })
}