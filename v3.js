var circleWith = 20;
var moveInter;

(function() {
  app = {

    /**
     * starts the listner
     */
    listeners: function() {
      document.addEventListener("mousemove", app.drawing);
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
      document.body.onmousedown = function() {
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
