const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let scene = new Map()

class Clock {
    constructor() {
        this.lastTime = Date.now();
        this.deltaTime = 0
        this.fps = 60
    }
    tick() {
        var now = Date.now();
        this.deltaTime = now - this.lastTime
        this.lastTime = now

    }
    waitForFPS() {
        let time = (1/this.fps) - (Date.now() - this.lastTime)
        if(time < 0) {
            if(time < -1) console.warn(`Loop exceeded FPS by ${Math.floor(-time)} ms`)
            return 0
        }
        return (1/this.fps) - (Date.now() - this.lastTime)
    }
}
var clock = new Clock()

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    frame()
}
resize()
addEventListener("resize", resize);

//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;


class Timer {
    constructor() {
        this.startTime = Date.now();
    }
    get() {
        return (Date.now() - this.startTime)/1000
    }
    hasElapsed(time) {
        return time <= this.get()
    }
    reset() {
        this.startTime = Date.now()
    }
}
function frame() {
    clock.tick()
    ctx.clearRect(0,0, canvas.width, canvas.height)
    for (let [name, obj] of scene.entries()) {
        obj.update(ctx)
    } 
    for (let command of commands) {
        command.run()
    }

    
}
function loop() {
    frame()
    setTimeout(loop, clock.waitForFPS())  
}
loop()