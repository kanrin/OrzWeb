import Render from "./framework/render"
import Component from "./framework/component"
import Click from "./com/click"

// 样式
import "./style/index.scss"

const m = new Render(document.body)
const r = new Component()
const c1 = new Component()
const c2 = new Component()
const c3 = new Component()
c1.setText("Hello")
c2.setText("World")
c3.setText("!")
c1.setAttr("class", "main1 text-2")
c2.setAttr("class", "main2 text-2")
c3.setAttr("class", "main3 text-2")
const c4 = new Click()
r.setText([c1, c2, c3, c4])
m.mount(r)
