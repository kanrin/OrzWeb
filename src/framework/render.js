import Exception from "./exception"

export default class Render {
    constructor(base) {
        this.t = base
    }

    mount(r) {
        if (r.hasOwnProperty("html")) {
            this.t.appendChild(r.html)
        } else {
            throw new RenderError("is not a element")
        }
    }
}

class RenderError extends Exception {
    constructor() {
        super()
    }

    error() {
        return `[render error]: ${this.msg}`
    }
}