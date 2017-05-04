document.getElementById("fullPage").addEventListener("mousemove", mouseMove);
document.getElementById("circle").addEventListener("dblclick", circleStyleChange);


var circle = document.getElementById('circle');
var circleWith = 20;
// To set the mouse the center of the circle


function mouseMove(event) {
  // Moves the mouse
  document.getElementById('circle').style.top = (event.pageY - circleWith) + "px";
  document.getElementById('circle').style.left = (event.pageX - circleWith) + "px";
}
var timesClicked = 0;
// When timesclicked by circle change
function circleStyleChange(event) {
  console.log("RUN");
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
