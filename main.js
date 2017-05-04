document.getElementById("fullPage").addEventListener("mousemove", mouseMove);

var circle = document.getElementById('circle');

function mouseMove(event) {
  // Moves the mouse
  document.getElementById('circle').style.top = event.pageY + "px";
  document.getElementById('circle').style.left = event.pageX + "px";
}
function circleStyleChange() {
  // This function changes the circle style when there is 2 times clickked
}
