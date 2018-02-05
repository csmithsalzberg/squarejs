//Caleb Smith-Salzberg
//SoftDev2 pd7
//hw1
//2018-01-05

var c = document.getElementById("slate");
//slate is the canvas
var ctx = c.getContext("2d");
//create a 2d object that controls the stuff
ctx.fillStyle = "#ff0000";
//red


var toggle = document.getElementById("t");
var clear = document.getElementById("c");


var type = "circle"
var mode = function(e){
    if (type == "circle"){
	type = "rectangle";
    } else {
	type =  "circle";
    }
    console.log(type);
}
toggle.addEventListener("click", mode);

var draw = function(e){
    console.log(e.offsetX);
    console.log(e.offsetY);
    ctx.beginPath();
    ctx.strokeStyle="red";
    if (type =="circle"){
	ctx.arc(e.offsetX, e.offsetY, 10, 0, 2*Math.PI);
	ctx.stroke();
	ctx.fill();
    } else {
	ctx.fillRect( e.offsetX, e.offsetY, 20, 20 );
	//fill the rectangle with coordinates and lengths respectively
    }
}
c.addEventListener("click", draw);

var clearboard = function(e){
    console.log(e);
    ctx.fillStyle="white";
    ctx.fillRect(0,0,600,600);
}
clear.addEventListener("click", clearboard);
