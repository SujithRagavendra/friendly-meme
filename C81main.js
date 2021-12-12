var Canvas=document.getElementById("caanvas")
var draw=Canvas.getContext("2d")
var colour="red"

draw.beginPath()
draw.strokeStyle=colour
draw.lineWidth=3
draw.arc(200,250,30,0,2*Math.PI)
draw.stroke()
Canvas.addEventListener("mousedown",click)
function click(e){
colour=document.getElementById("colour").value
mousex=e.clientX-Canvas.offsetLeft
mousey=e.clientY-Canvas.offsetTop
circle(mousex,mousey)

}
function circle(mousex,mousey){
draw.beginPath()
draw.strokeStyle=colour
draw.lineWidth=3
draw.arc(mousex,mousey,30,0,2*Math.PI)
draw.stroke()
}
function clear(){
draw.clearRect(0,0,Canvas.width,Canvas.height)
} 