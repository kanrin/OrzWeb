import Render from "./framework/render"
import Component from "./framework/component"
import Click from "./com/click"

// 样式
import "./style/index.scss"

const m = new Render(document.body)
const r = new Component() // 根组件
const c1 = new Component() // 组件1
const c2 = new Component() // 组件2
const c3 = new Component() // 组件3
c1.setText("Hello")
c2.setText("World")
c3.setText("!")
c1.setAttr("class", "main1 text-2")
c2.setAttr("class", "main2 text-2")
c3.setAttr("class", "main3 text-2")
const c4 = new Click() // 自定义组件
r.setText([c1, c2, c3, c4])
m.mount(r)
