import Component from "../framework/component";

export default class Click extends Component {
    constructor() {
        super()
        this.data = {
            count: 0
        }
        this.tag = "button"
        this.addEvent("click", this, "click")
        this.child = `click: ${this.data.count}`
        this.setAttr("class", "text-2")
    }

    click() {
        this.data.count = this.data.count + 1
    }

}