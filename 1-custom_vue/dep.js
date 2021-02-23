class Dep {
  constructor () {
    this.subs = []
  }
  addSub (sub) {
    this.subs.push(sub)
  }
  notify () {
    this.subs.forEach(function(sub) {
      sub.update() // fixme update ? 哪里注册的?
    })
  }
}