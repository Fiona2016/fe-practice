## This
### 易错题
1. 
```js
const o1 = {
  name: 'o1',
  fn: function () {
    return this.name
  }
}
const o3 = {
  name: 'o3',
  fn: function () {
    const fn = o1.fn
    return fn()
  }
}
console.log(o3.fn())
```
代码如上，错误原因是看到`o3.fn`以为调用者是o3，其实o3.fn()返回function，相当于fn()在全局被直接调用，并没有调用者
2. 
```js
function foo () {
  return a => {
    console.log(this.a)
  }
}
const obj1 = {
  a: 2
}
const obj2 = {
  a: 3
}
const bar = foo.call(obj1) // 返回的箭头函数，指定的this为obj1
console.log(bar.call(obj2)) // 再绑定不再生效
```
```js
var a = 123
const foo = () => a => {
  console.log(this.a)
}
```
3.  分别输出什么返回结果
```js
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope(); 

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();
```

### 概念学习
1. 编译原理
js是动态编译语言，边编译边执行，整个过程分为几个步骤
  * 分词(Tokenizing) / 词法解析(lexing)（词法作用域） -> 产出物是数组，词法单元
  * 解析 / 语法分析 -> 产出物是抽象语法树 (可以在此处查看生成的AST https://astexplorer.net/)
  * 代码生成 -> 可执行代码

执行过程中参与的角色
* 引擎 负责整个js程序的编译及执行，调度者的角色？
* 编译器 负责语法分析及代码生成
* 作用域 收集并维护所有声明的标识符变量，确定当前执行的代码对这些标识符的访问权限

对于`var a = 2`这条语句来说
* 编译阶段: 
  * 分词
  * 作用域查询，决定是否新建变量
  * 生成可执行代码
* 运行：
  * 询问作用域，查找该变量，赋值
2. 词法作用域
作用域有两套工作模型
  * 动态作用域(Bash)
  * 词法作用域(js)
既然叫词法作用域，意味着作用域是在词法分析(编译阶段、分词)时定义的作用域。
```js
function foo (a) {
  var b = a * 2
  function bar (c) {
    console.log(a, b , c)
  }
  bar(b * 3)
}
foo(2)
```
* 全局作用域
  * foo
* foo作用域
  * a
  * b
  * bar
* bar作用域
  * c

那动态作用域怎么理解？以下面的代码为例
```js
function foo () {
  console.log(a)
}
function bar() {
  var a = 1
  foo()
}
var a = 2
bar() // 应该输出 2， 因为作用域是在词法分析时已确定，foo的作用域链和bar没有什么关系
```
再看下面的代码
```js
function bar(a) {
  var b = a
  function foo () {
    console.log(b)
  }
  foo()
}
bar(3) // output 3
```
3. 调用栈
调用栈，是runtime时，会将访问的变量放在内存中，按照先进后出的方式，执行各个函数，各个上下文组合形成的结构。
4. this优先级
* call, apply > 隐性（调用）
* new > bind
* new > call
* => 箭头函数的this绑定无法修改
5. 原型链
* 原型
  * Why 建立连接  -> 共享
  * What prototype, function会有prototype，new function生成的对象原型会指向该function的prototype，可以通过__proto__或者getPrototypeOf获取该对象的原型
  * How 组合继承（与其叫继承，不如叫行为委托？) -> 数据独享，行为共享

6. new一个对象的过程
```js
function F () {}
// 当执行 new F()时，发生了什么
var obj = Object.create({})  // 1. 创建一个对象
obj.__proto__ = F.prototype // 2. 对象的原型指向构造函数的原型
constructorFn.call(obj) // 3. 将this指向该对象，执行构造函数内容
return obj // 4. 将对象返回, 
// 注意:
// 1. 如果在构造函数里显式返回一个引用类型，则new的结果是这个新的对象（或数组）
function Fn1 () {
  this.name = 'hello'
  var arr = []
  arr.name = 'changed!' // 引用类型就可以，对象和数组都行
  return arr
}
Fn1.prototype.name = 'world'
var a = new Fn1()
console.log(a.name) // changed

// 2. 如果返回的是一个基础类型，则依然返回创建的对象
function Fn2 () {
  this.name = 'hello'
  return 'pass!!'
}
var a = new Fn2()
console.log(a) // changed
```
### QA
1. 词法作用域解析、调用栈和this指向、原型链查找的区别
2. js引擎在编译时做了哪些性能优化
3. 解析的过程是怎样的？
4. 代码生成可执行代码，怎么理解？
5. md -> html分析


### Refs
1. https://github.com/mqyqingfeng/Blog/issues/4
2. 你不知道的js上卷
3. https://github.com/mqyqingfeng/Blog/issues/2