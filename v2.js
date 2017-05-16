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
  // Stores the movement of the mouse in a array
  movementArrayX[movementArrayX.length + 1] = event.pageX - circleWith;
  movementArrayY[movementArrayY.length + 1] = event.pageY - circleWith;
}
var movement;
function startRepeat() {
  // Start to replicate the movement
  movement = setInterval(move, 1);
}
function move() {
  if (movementArrayY.length == 0) {
    // If there is nothing left in the array
    clearInterval(movement);
  }
  else {
    // Moves the circle
    circle.style.top = (movementArrayY[0]) + "px";
    circle.style.left = (movementArrayX[0]) + "px";

    movementArrayX.shift();
    movementArrayY.shift();
  }
}
