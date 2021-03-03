interface Executor {

}
enum state {
  pending,
  fulfilled,
  rejected
}
class MPromise {
  state: state;
  onfulfilled: Function;
  onrejected: Function
  constructor (fn: Executor)  {
    this.state = state.pending // fixme
    this.onfulfilled = null
    this.onrejected = null
  }
  then (onfulfilled: Function, onrejected: Function) {
    if (this.state === state.pending) { // 如果没有被决议

    }
    if (this.state === state.fulfilled) {

    }
    if (this.state === state.rejected) {

    }
  }
}
// test case
const p1 = new MPromise((resolve, reject) => {

})