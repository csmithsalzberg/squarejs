//Caleb Smith-Salzberg
//SoftDev2 pd7
//hw1
//2018-01-05

var c = document.getElementById("slate");
//slate is the canvas
var ctx = c.getContext("2d");
//create a 2d object that controls the stuff

var toggle = document.getElementById("t");
var clear = document.getElementById("c");


var type = "circle"
var mode = function(e){
    if (type == "circle"){
	type = "circle" //"rectangle"; //remove square stuff for now
    } else {
	type =  "circle";
    }
    console.log(type);
}
toggle.addEventListener("click", mode);

var count = 0;

var draw = function(e){
    console.log(e.offsetX);
    console.log(e.offsetY);
    
    if (count = 0){
	ctx.beginPath();
	ctx.moveTo(e.offsetX,e.offsetY);
	count += 1;
    }
    else{
	ctx.lineTo(e.offsetX,e.offsetY);
	ctx.stroke();
	ctx.beginPath();
	ctx.strokeStyle="red";
	ctx.fillStyle="red";
	if (type =="circle"){
	    ctx.arc(e.offsetX, e.offsetY, 10, 0, 2*Math.PI);
	    ctx.stroke();
	    ctx.fill();
	    ctx.moveTo(e.offsetX,e.offsetY);
	} else {
	    ctx.fillRect( e.offsetX, e.offsetY, 20, 20 );
	    //fill the rectangle with coordinates and lengths respectively
	}
    }
}
c.addEventListener("click", draw);

var clearboard = function(e){
    console.log(e);
    ctx.fillStyle="white";
    ctx.fillRect(0,0,600,600);
    count=0;
}
clear.addEventListener("click", clearboard);
