const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
ctx.imageSmoothingEnabled = false
const img = document.querySelector("#character")

let x = 0
let y = 0

let pos = 0
let animType = 0;
let frameCounter = 0

function animationLoop () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.drawImage(img,
        pos * 32, animType *32 ,32,32, 
            x, y, canvas.width, canvas.height)
    
    frameCounter++
    if (frameCounter >= 1) {
        pos++
        if (pos >= 3) {pos = 0}
        frameCounter = 0
    }
    // window.requestAnimationFrame(animationLoop)
}

function main() {
    // window.requestAnimationFrame(animationLoop)
    setInterval(animationLoop,120)
}

window.onkeydown = function(event) {
    console.log(event.code)
    if (event.code === "KeyW") {animType = 3}
    if (event.code === "KeyS") {animType = 0}
    if (event.code === "KeyA") {animType = 1}
    if (event.code === "KeyD") {animType = 2}
}

main()