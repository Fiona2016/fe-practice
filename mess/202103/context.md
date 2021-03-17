## Context
### Why
跨组件传递数据
### 元素
* provider
* contentType
### 场景对比
如果只是层级深，怎么透传？ component composition 实现？
依赖倒置？
之前 a -> b -> c -> d
现在 a(d) -> b -> c -> d
如果是层级深且不确定，涉及的组件多，可以用context。一般见于 locale, theme, global cache data等。




### QA
1. 多语言是怎么实现的？在哪里注入？哪里获取？
2. contextType
3. 


### idea
istio service mesh，微服务和微前端的共通之处
* 连接可视化
* 安全校验
* 控制策略
* 可观测性