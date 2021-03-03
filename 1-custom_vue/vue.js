class Vue {
  constructor(options) {
    // 数据劫持？
    // 为data增加proxy
    // 挂载dom
    const { data } = options 
    this.data = typeof data === 'function' ? data() : data
    // this.el = el
    // fixme 
    // this.exp = exp // exp是一层，需要解析
    this.vm = this

    Object.keys(data).forEach(function(k){
      this.proxyKeys(k)
    }, this)

    observe(this.data)

    // const watcher = new Watcher(this, exp, function (newVal) {
    //   el.innerHTML = newVal
    //   console.log('cb is calle exp is changed', exp);
    // })

    // el.innerHTML = this.data[exp]
    // this.bootstrap()
  }
  proxyKeys (k) {
    const _this = this
    Object.defineProperty(this, k, {
      enumerable: true,
      configurable: true,
      get() {
        return _this.data[k]
      },
      set(v) {
        _this.data[k] = v
      }
    })
  }
  bootstrap () {
    // const {data, el, exp} = this
  }
}
