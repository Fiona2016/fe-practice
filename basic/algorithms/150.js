/** 逆波兰表达式
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
   let numStack = []
   tokens.forEach(t => {
     if (isOperator(t)) {
       // 取numStack前两个数？
       let [r, l] = [numStack.pop(), numStack.pop()]
       numStack.push(calc(l, r, t))
     } else {
      numStack.push(t)
     }
   })
   return numStack[0]
};

function isOperator (str) {
  return /^[\+\-\*\/]$/.test(str)
}
function calc(xp, yp, opt = '+') {
  const x = Number(xp)
  const y = Number(yp)
  switch(opt) {
    case '+': {
      return x + y
    }
    case '-': {
      return x - y
    }
    case '*': {
      return x * y
    }
    case '/': {
      return  parseInt(x / y)
    }
  }
}

const test = arr => console.log(evalRPN(arr))
test(["2","1","+","3","*"])
test(["4","13","5","/","+"])
test(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])
