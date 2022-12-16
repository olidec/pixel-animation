const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
ctx.imageSmoothingEnabled = false
const img = document.querySelector("#character")

let x = 0
let y = 0

function animationLoop () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.drawImage(img, x, y, canvas.width, canvas.height)

}

function main() {
    setInterval(animationLoop,160)
}

main()