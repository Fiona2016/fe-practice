class Watcher {
  constructor (vm, exp, cb) {
    this.vm = vm
    this.exp = exp
    this.cb = cb
    this.value = this.get()
  }
  get () {
    Dep.target = this // todo ? 缓存自己, why
    const value = this.vm.data[this.exp] // todo, exp是啥? 为啥从data取exp?
    Dep.target = null
    return value
  }
  update () {
    this.run() // 直接run就好了，为啥要update一下？
  }
  run () {
    const value = this.vm.data[this.exp]
    const ov = this.value
    if (value !== ov) {
      this.value = value
      this.cb.call(this.vm, value, ov)
    }
  }
}