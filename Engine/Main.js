const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let scene = new Map()

function frame() {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    for (let [key, value] of scene.entries()) {
        value.draw(ctx)
        value.script.execute()
        console.log(key)
    } 

    setTimeout(frame, 20)  
}
frame()