function isLoaded() {
    if (document.readyState != "complete") setTimeout(isLoaded, 20)
    
    return true;
  }
  
  isLoaded()
class MoveRight extends Script {
    execute() {
        this.parent.x += 1
        console.log(this.parent.x)
    }
}
let CoolCircle = new Circle("CoolCircle", 200,100,40, new Color(0, 255, 255))

class GrowCircleAnim extends Command {
    initialize() { this.timer = new Timer() }
    execute() { CoolCircle.radius += clock.deltaTime/10 }
    isFinished() { return this.timer.hasElapsed(2.0) }
}
class ShrinkCircleAnim extends Command {
    initialize() {
        this.timer = new Timer()
    }
    execute() {
        CoolCircle.radius -= clock.deltaTime/10
    }
    isFinished() {
        return this.timer.hasElapsed(2.0)
    }
}

(new GrowCircleAnim).then(new ShrinkCircleAnim).schedule()

class Chromosome extends Object {
    constructor(name, x, y) {
        super(name,x,y)
        this.genes = []
        for(let i = 0; i < 20; i++) {
            let newCircle = new Circle(`${name}/gene${i}`, i *10, i *10, 20)
            newCircle.parent = this
            this.genes.push(newCircle)
        }
    }

}

var coolChromosome = new Chromosome("cool chromosome", 20, 20)
class MoveChromosome extends Command {
    initialize() { this.timer = new Timer() }
    execute() { coolChromosome.x += clock.deltaTime/10 }
    isFinished() { return this.timer.hasElapsed(5.0) }
}
(new MoveChromosome).schedule()


//let CoolRect = new Rectangle("CoolRect", 10,10,100,100, new Color(0,255,0))
//let CoolerRect = new Rectangle("CoolerRect", 10,120,100,100, new Color(0,0,255))




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