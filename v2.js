var circleWith = 20;
var moveInter;
(function() {
  app = {
    startMovement: function() {
      moveInter = setInterval(circle.move, 10);
    },
    endMovement: function() {
      clearInterval(moveInter);
    },
    listeners: function() {
      document.addEventListener("mousemove", store.movement);
      document.addEventListener("click", app.startMovement);
    }
  }
})();
var position = {
  x: [],
  y: []
}
var movementArrayX = [''];
var movementArrayY = [''];
(function() {
  store = {
    movement: function(event) {
      // This function stores the movement of a array
      position.x[position.x.length + 1] = event.pageX - circleWith;
      position.y[position.y.length + 1] = event.pageY - circleWith;
    }
  }
})();

(function() {
  circle = {
      move: function() {
        console.log("Move");
        if (position.x == 0) {
          // If there is nothing left in the array
          app.endMovement();
        }
        else {
          // Moves the circle
          circle.positionTop(position.y[0]);
          circle.positionLeft(position.x[0]);

          position.x.shift();
          position.y.shift();
        }
      },
      positionTop: function(position) {
        document.getElementById('circle').style.top = position + "px";
      },
      positionLeft: function(position) {
        document.getElementById('circle').style.left = position + "px";
      }
  }
}());
app.listeners();
