function MPromise (executor) {
  this.state = 'pending'
  this.result = null
  this.reason = null
  this.resolvedQueue = []
  this.rejectedQueue = []
  const resolve = result => {
    if (isPromise(result)) {
      return result.then(resolve, reject)
    }
    if (this.state === 'pending') {
      this.state = 'fulfilled'
      this.result = result
      queueMicrotask(_ => { // resolvedQueue有可能为空
        this.resolvedQueue.forEach(onresolved => onresolved(result))
      })
    }
  }
  const reject = reason => {
    this.state = 'rejected'
    this.reason = reason
    queueMicrotask(_ => {
      this.rejectedQueue.forEach(onrejected => onrejected(reason))
    })
  }
  // 在下个事件周期执行？
  executor(resolve, reject)
}

MPromise.prototype.then = function(onresolved, onrejected) {
  if (this.state === 'fulfilled') {
    return new MPromise((resolve, reject) => {
      queueMicrotask(_ => {
        try {
          return resolve(onresolved(this.result))
        } catch (e) {
          reject(e)
        }
      })
    })
  }
  if (this.state === 'rejected') {
    return new MPromise((resolve, reject) => {
      queueMicrotask(_ => {
        try {
          const r = onrejected(this.reason)
          resolve(r)
        } catch (e) {
          reject(e)
        }
      })
    })
  }
  if (this.state === 'pending') {
    // this.resolvedQueue.push(onresolved)
    // this.rejectedQueue.push(onrejected)
    return new MPromise((resolve, reject) => {
      this.resolvedQueue.push(() => {
        try {
          let result = onresolved(this.result)
          resolve(result)
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}

MPromise.prototype.resolve = function(v) {
  return new MPromise((resolve) => {
    resolve(v)
  })
}

// function promisefy(fn) {
//   const result = fn()
//   // 如果result 是promise，直接添加queue, 否则包装promise
//   if(isPromise(result)) {
//     return result
//   } else {
//     return new MPromise.resolve(result)
//   }
// }

function isPromise (fn) {
  return typeof fn === 'function' && typeof fn.then === 'function'
}