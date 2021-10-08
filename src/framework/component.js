import Element from "./element";

export default class Component extends Element {
    constructor(tag) {
        super(tag)
        this.data = {}
        this.props = {}
        this.html = this.generate()
    }

    data() {
        return {}
    }

    setText(t) {
        this.child = t
        this.render()
    }

    setAttr(name, value) {
		this.attr[name] = value
        this.render()
	}

	delAttr(name) {
		delete this.attr[name]
        this.render()
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
