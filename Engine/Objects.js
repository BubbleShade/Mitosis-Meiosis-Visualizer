
class Object {
    constructor(name, x,y) {
        scene.set(name, this)
        this.x = x
        this.y = y
        this.script = Script.None
        this.parent = null
    }
    update(ctx) {  this.script.execute(); }
    setScript(script) { this.script = new script(this) }
    getPosX() {
        let x = this.x
        if(this.parent) x += this.parent.x
        return x
    }
    getPosY() {
        let y = this.y
        if(this.parent) y += this.parent.y
        return y
    }
}
class Sprite extends Object {
    update(ctx) { 
        this.script.execute();
        this.draw(ctx)
    }
    draw(ctx) { }
}

class Rectangle extends Sprite {
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
        ctx.fillRect(this.getPosX(), this.getPosY(), this.width,this.height);
    }

}
class Circle extends Sprite {
    constructor(name, x, y, radius, fillColor = new Color(0,0,0), outlineColor = new Color(0,0,0), outlineSize = 0) {
        super(name, x,y)
        this.radius = radius
        this.fillColor = fillColor
        console.log(fillColor)
        console.log(this.fillColor)
        this.outlineColor = outlineColor
        this.outlineSize = outlineSize
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.getPosX(), this.getPosY(), this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.fillColor.css()
        ctx.fill()
        if(this.outlineSize > 0){
            ctx.lineWidth = this.outlineSize
            ctx.strokeStyle = this.outlineColor
            ctx.stroke();
        }
    }
}

class Script {
    constructor(parent) {
        this.parent = parent
    }
    static None = new Script()
    execute() {}
}
