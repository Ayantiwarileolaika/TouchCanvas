var lastX, lastY;
canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
line_width=2;
new_width=screen.width;
var width = screen.width - 70;
new_height=screen.height - 300;
if (new_width < 992 ){
    document.getElementById("myCanvas").width = width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
  color = document.getElementById("color").value;
  line_width = document.getElementById("line_width").value;


lastX = e.touches[0].clientX - canvas.offsetLeft;
lastY = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;

    console.log("Last position of x and y coordinates = ")
    console.log(lastX,lastY);
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();
    lastX = current_position_of_touch_x;
    lastY = current_position_of_touch_y;
}