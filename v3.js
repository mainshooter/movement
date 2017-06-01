var circleWith = 20;
var moveInter;
var mouseStatus = 0;
var color = 'black';

(function() {
  app = {

    /**
     * starts the listner
     */
    listeners: function() {
      document.addEventListener("mousemove", app.drawing);
      document.addEventListener("mousedown", app.changeMouseStatus);
      document.addEventListener("mouseup", app.changeMouseStatus);

      var colorSelect = document.getElementsByClassName('colorSelect');
      for (var i = 0; i < colorSelect.length; i++) {
        colorSelect[i].addEventListener("click", function(){ app.changeColor(this.value) });
      }

    },
    changeColor: function(colorChoise) {
      color = colorChoise;
    },

    /**
     * Sets the mouse status
     * If it is 0 you can't draw
     * If it is 1 you can
     */
    changeMouseStatus: function() {
      if (mouseStatus === 0) {
        mouseStatus = 1;
      }
      else if (mouseStatus === 1) {
        mouseStatus = 0;
      }
    },

    /**
     * Puts the div / pencil inkt on the screen
     * @param  {[object]} event [The event from the event handler]
     */
    drawing: function(event) {

      var div = document.createElement("div");
      div.style.padding = '1em';
      div.style.position = "absolute";
      div.style.top = event.pageY + "px";
      div.style.left = event.pageX + "px";
      div.style.backgroundColor = color;
      div.style.zIndex = -1;

      if (mouseStatus === 1) {
        app.place(div);
      }
    },

    /**
     * Pace a div on the DOM
     * @param  {[obj]} div [The create div]
     */
    place: function(div) {
      document.getElementById('fullPage').appendChild(div);
    },
  }
})();
app.listeners();
