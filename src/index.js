import Render from "./framework/render"
import Component from "./framework/component"

// 样式
import "./style/index.scss"

const m = new Render(document.body)
const r = new Component()
r.setText("hello world")
r.setAttr("class", "main text-2")
m.mount(r)
