let Width = window.innerWidth
let Height = window.innerHeight

let myCanvas = document.getElementById("myCanvas")

myCanvas.width = Width
myCanvas.height = Height

ctx = myCanvas.getContext("2d")

ctx.fillStyle = "#FFFFFF"
ctx.strokeStyle = "blue"
// ctx.lineWidth = number


ctx.beginPath();
ctx.moveTo(20, 140); // Move pen to bottom-left corner
ctx.lineTo(120, 10); // Line to top corner
ctx.lineTo(220, 140); // Line to bottom-right corner
ctx.closePath(); // Line to bottom-left corner
ctx.fill();
ctx.stroke();

let i = 0

var button = document.getElementById("bro")

button.style.top = "50%"

function test(){
    console.log("lovely")
}

function draw(time) {
    ctx.fillRect(0,0,50+i,50+i)
    i++

    requestAnimationFrame(draw)
}

// requestAnimationFrame(draw)