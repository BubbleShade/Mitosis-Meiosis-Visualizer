const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let scene = new Map()

function frame() {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    for (let [name, obj] of scene.entries()) {
        obj.update(ctx)
    } 

    setTimeout(frame, 20)  
}
frame()