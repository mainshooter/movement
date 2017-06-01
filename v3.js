var circleWith = 20;
var moveInter;
var mouseStatus = 0;

(function() {
  app = {

    /**
     * starts the listner
     */
    listeners: function() {
      document.addEventListener("mousemove", app.drawing);
      document.addEventListener("mousedown", app.changeMouseStatus);
      document.addEventListener("mouseup", app.changeMouseStatus);
    },

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
      console.log(event);
      var div = document.createElement("div");
      div.style.padding = '1em';
      div.style.position = "absolute";
      div.style.top = event.pageY + "px";
      div.style.left = event.pageX + "px";
      div.style.backgroundColor = 'black';

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
