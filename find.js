var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;

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
    d = distance(targetX, targetY, e.x, e.y);
    console.log("Distance: ", d);
    changeColor();
};

var changeColor = function(){
    var maxDist = distance(0,0,boxWidth, boxHeight);
    var percentage = (d/maxDist).toFixed(0);
    percentage = 70;
    console.log("BEFORE: ",box);
    box.setAttribute("background-color", "hsl(0,0%," + percentage + "%)");
    console.log("AFTER: ",box);
    return true;
}

box.addEventListener("mousemove", findIt);

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

