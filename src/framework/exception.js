export default class Exception {
    constructor(msg) {
        this.msg = msg
    }

    error() {
        return `[error] ${this.msg}`
    }
}