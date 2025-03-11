
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

class MoveRight extends Script {
    execute() {
        this.parent.x += 1
        console.log(this.parent.x)
    }
}

class MoveInCircle {
    

}

let CoolRect = new Rectangle("CoolRect", 10,10,100,100,new Color(0,0,255))
let CoolCircle = new Circle("CoolCircle", 200,100,40, fillColor = new Color(164, 214, 233))



"rgb(164, 214, 233)"
//CoolRect.addScript(MoveRight)


    
/*ctx.beginPath();
ctx.arc(200, 100, 40, 0, 2 * Math.PI);
ctx.fillStyle = "rgb(164, 214, 233)"
ctx.fill()
ctx.lineWidth = 4
ctx.strokeStyle = "blue"
ctx.stroke();
*/