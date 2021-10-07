import Element from "./element";

export default class Component extends Element {
    constructor(tag) {
        super(tag)
        this.data = {}
        this.props = {}
        this.html = ""
    }

    data() {
        return {}
    }
    
    setData(key, value) {
        this.data[key] = value
        this.render()
    }

    setProps(key, value) {
        this.props[key] = value
        this.render()
    }

    render() {
        this.html = this.generate()
    }

}