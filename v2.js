document.addEventListener("mousemove", storeMovement);
document.addEventListener("click", startRepeat);
// Computer events

document.addEventListener("touchmove", storeMovement);
document.addEventListener("touchend", startRepeat);
// Touch events

var circle = document.getElementById('circle');
var circleWith = 20;
// To set the mouse the center of the circle

var movementArrayX = [''];
var movementArrayY = [''];

function storeMovement(event) {
  // Moves the mouse
  // circle.style.top = (event.pageY - circleWith) + "px";
  // circle.style.left = (event.pageX - circleWith) + "px";
  movementArrayX[movementArrayX.length + 1] = event.pageX - circleWith;
  movementArrayY[movementArrayY.length + 1] = event.pageY - circleWith;
}
var movement;
function startRepeat() {
  movement = setInterval(move, 1);
}
function move() {
  console.log("START!");
  if (movementArrayY.length == 0) {
    console.log("STOP");
    clearInterval(movement);
  }
  else {
    circle.style.top = (movementArrayY[0]) + "px";
    circle.style.left = (movementArrayX[0]) + "px";

    movementArrayX.shift();
    movementArrayY.shift();
  }
}
var timesClicked = 0;
// When timesclicked by circle change
function circleStyleChange() {
  // This function changes the circle style when there is 2 times clickked
  if (timesClicked === 0) {
    // Change style to other style
    circleWith = 50;
    circle.className = "other";
    timesClicked++;

  }
  else if (timesClicked === 1) {
    // Change style to default
    circleWith = 20;
    circle.className = "default";
    timesClicked = 0;
  }
}
