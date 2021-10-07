import Render from "./framework/render"
import Component from "./framework/component"

const m = new Render(document.getElementById("app"))
const r = new Component("div", { "class": "shishi" }, { "mouseover": (e) => this.attr["class"] = "shi1" }, "test")
m.mount(r)
