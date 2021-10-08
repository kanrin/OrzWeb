import Exception from "./exception"

export default class Element {
	constructor(tag, attr, event, child) {
		this.tag = tag || 'div'
		this.attr = attr || {}
		this.event = event || {}
		this.child = child || ""
	}

	generate() {
		const e = document.createElement(this.tag)
		// 设置attr
		Object.keys(this.attr).map(key => {
			e.setAttribute(key, this.attr[key])
		})
		// 设置事件
		Object.keys(this.event).map(key => {
			e.addEventListener(key, function(){
				this.event[key]()
			})
		})
		if (typeof this.child === "string") {
			e.appendChild(document.createTextNode(this.child))
		} else if (this.child instanceof Array) {
			this.child.map(c => {
				e.appendChild(c.generate())
			})
		} else {
			throw new ElementError("child must be type string / array")
		}
		return e
	}
}

class ElementError extends Exception {
	constructor() {
		super()
	}

	error() {
		return `[element error]: ${this.msg}`
	}
}

export const createElement = function (tag, attr, children) {
	return new Element(tag, attr, null, children)
}
