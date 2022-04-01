var mouseEvent="empty";
var lastPosX, lastPosY;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

var color = "teal";
var lineWidth = 5;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    
    colorr = document.getElementById("color").value;
    lineWidth = document.getElementById("lineWidth").value;
    
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);


function my_mousemove(e) {
    
    curPosX = e.clientX - canvas.offsetLeft;
    curPosY = e.clientY;
    
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = colorr;
        ctx.lineWidth=lineWidth;
        
        console.log("Last position of x and y coordinates is: ");
        console.log("x = " + lastPosX + ", and y = " + lastPosY);
        ctx.moveTo(lastPosX, lastPosY);
        
        console.log("Current position of x and y coordinates is: ");
        console.log("x = " + curPosX + ", and y = " + curPosY);
        
        ctx.lineTo(curPosX, curPosY);
        ctx.stroke();
    }
    
    lastPosX = curPosX;
    lastPosY = curPosY;
}

function clearArea() {
    
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
}