
class Object {
    constructor(name, x,y) {
        scene.set(name, this)
        this.x = x
        this.y = y
        this.script = Script.None

    }
    draw(ctx) { }
    addScript(script) {
        this.script = new script(this)
    }
}

class Rectangle extends Object {
    constructor(name, x, y, width, height, fillColor =  new Color(0,0,0), outlineColor = new Color(0,0,0), outlineSize = 0) {
        super(name, x,y)
        this.width = width
        this.height = height
        this.fillColor = fillColor
        this.outlineColor = outlineColor
        this.outlineSize = outlineSize
    }
    draw(ctx) {
        ctx.fillStyle = this.fillColor.css();
        ctx.fillRect(this.x,this.y, this.width,this.height);
    }
}

class Script {
    constructor(parent) {
        this.parent = parent
    }
    static None = new Script()
    execute() {}
}
