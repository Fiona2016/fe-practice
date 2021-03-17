### 1. slot
在React中也有插槽的概念，不过叫做组件的组合。coposition component。
* 依赖反转
以dialog为例。引入关系
之前是dialog -> content
改造后是 content -> dialog

dialog需要知道content细节，需要根据不同的content类型支持不同的dialog。依赖倒置后，dialog只维护dialog结构，暴露slot，新加content对之前代码无入侵。content专注可变的部分，dialog决定结构。

