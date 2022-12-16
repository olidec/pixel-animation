const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
ctx.imageSmoothingEnabled = false
const img = document.querySelector("#character")

let x = 0
let y = 0

let pos = 0
let animType = 0
let frameCounter = 0
let interval = null

function animationLoop () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.drawImage(img,
        pos * 64, animType * 64 ,64,64, 
            x, y, canvas.width, canvas.height)
    
    frameCounter++
    if (frameCounter >= 1) {
        pos++
        if (pos >= 9) {pos = 0}
        frameCounter = 0
    }
    // if (running) {
        // window.requestAnimationFrame(animationLoop)
        // }
}

// function start() {
//     running = true
//     window.requestAnimationFrame(animationLoop)

// }

function main() {
    // window.requestAnimationFrame(animationLoop)
    interval = setInterval(animationLoop,120)
}

window.onkeydown = function(event) {
    console.log(event.code)
    if (event.code === "KeyW") {animType = 3}
    if (event.code === "KeyS") {animType = 0}
    if (event.code === "KeyA") {animType = 1}
    if (event.code === "KeyD") {animType = 2}
    if (event.code === "Space") {
        if (interval === null) {
            interval = setInterval(animationLoop,120)
        }
        else {
            clearInterval(interval)
            interval = null
        }
    }
}

main()