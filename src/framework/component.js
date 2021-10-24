import Element from "./element";

export default class Component extends Element {
	constructor(tag) {
		super(tag)
		this.data = {}
		this.props = {}
		this.html = this.generate()
	}

	data(d) {
		this.data = d
	}

	setText(t) {
		this.child = t
		this.render()
	}

	addEvent(e, f) {
		this.event[e] = f
		console.debug(f)
	}

	delEvent(e) {
		delete this.event[e]
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
		this.beforRender()
		this.html = this.generate()
		this.afterRender()
	}

	beforRender() {

	}

	afterRender() {

	}
}
