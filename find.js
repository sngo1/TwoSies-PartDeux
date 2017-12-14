var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
//var targetX = boxWidth / 2;
//var targetY = boxHeight / 2;
var targetX = (Math.random() * boxWidth).toFixed(0);
var targetY = (Math.random() * boxHeight).toFixed(0);

// Distance from target at any point
var d;

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    console.log("x0: ", x0, "|y0: ", y0, "|x1: ", x1, "|y1: ", y1);
    var dist = Math.sqrt((x0 - x1) * (x0 - x1) + (y0 - y1) * (y0 - y1));
    console.log("Distance: ", dist);
    return dist;
};

// Find the distance
var findIt = function(e) {
    // console.log("X: ", e.x);
    // console.log("Y: ", e.y);
    console.log( targetX, "|", targetY);
    d = distance(targetX, targetY, e.x, e.y);
    console.log("Distance: ", d);
    changeColor();
};

// Maximum possible distance
var maxDist = distance(0,0,boxWidth, boxHeight);

// Change the background color as the mouse moves
var changeColor = function(){
    var percentage = 100 - ((d/maxDist) * 100).toFixed(0);
    console.log("Percentage: ", percentage);
    console.log("BEFORE: ",box);
    box.setAttribute("style", "background-color:hsl(0,0%," + percentage + "%)");
    console.log("AFTER: ",box);
    return true;
}

var foundIt = function(e){
    d = distance(targetX, targetY, e.x, e.y);
    var percentage = 100 - ((d/maxDist) * 100).toFixed(0);
    if (percentage == 100){
	console.log("Found it!");
	var image = document.createElement("img");
	image.setAttribute('src', 'https://static1.squarespace.com/static/532e16b1e4b07cecfd92fdb3/t/546a8fd9e4b0dbd991d80eba/1416269785483/found-it-local-citation-sources.jpg');
	image.setAttribute("style","display:block; margin: 0 auto; background-position:center");
	console.log(image);
	box.appendChild(image);
	console.log(box);
    }
}

box.addEventListener("mousemove", findIt);
box.addEventListener("click", foundIt);

console.log("Testing distance...");
distance(0,0,3,4); // 5
distance(0,0,5,12); // 13
distance(0,0,7,24); // 25
distance(0,0,0,16); // 16
distance(0,0,17,0); // 17
distance(-17,0,17,0); // 34
distance(0,6,0,-6); // 12
distance(0,-6,0,6); // 12
distance(0,-6,0,-6); // 0

distance 

