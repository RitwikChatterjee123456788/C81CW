canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="purple";
width=2;
var last_position_of_x, last_position_of_y;
mouseEvent="";
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{

color=document.getElementById("color").value;
width=document.getElementById("width").value;

mouseEvent="mouseDown";}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e)
{
mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP";
}


canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{

current_mouse_x=e.clientX-canvas.offsetLeft;
current_mouse_y=e.clientY-canvas.offsetTop;

if(mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.moveTo(last_position_of_x, last_position_of_y);

ctx.lineTo(current_mouse_x, current_mouse_y);
ctx.stroke();
}

last_position_of_x=current_mouse_x;
last_position_of_y=current_mouse_y;
}