class Color {
    constructor(r,g,b) {
        this.r = r
        this.g = g
        this.b = b
    }
    css() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }
}