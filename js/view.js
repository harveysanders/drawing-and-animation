(function (window) {

    window.index = window.index || {};

    var draw = window.opspark.draw;
    var view;

    function View() {
        view = this;
        view.Container_initialize();
        view.initialize();
    }

    var p = View.prototype = new createjs.Container();
    p.Container_initialize = p.initialize;

    p.initialize = function () {
        // TODO 1 : Add a background //
       

        // TODO 2 : Create a circle and add it to our view //
        

        // TODO 3 : Position our circle in the center of the canvas //
        

        // TODO 4 : 
        

        // TODO 5 : Add some velocity properties to our display objects // 
        

        // TODO 6 : Add a reference to our shapes on the view object //
        
    };

    p.update = function () {
        // TODO 7 : Create some local variables that we will use often //
        

        // TODO 8 : Update the position of the circle based on its x-axis and y-axis velocity //
        

        // TODO 9 : Code the circle's top and bottom boundary check //
        

        // TODO 10 : Code the player's movement //
        
        
        // Player's boundary check //
        

        // TODO 11 : Write AI's movement //
        

        // TODO 12: Implement the player's collision check //
        

        // TODO 13 :  Create the AI collision check //
        
    };

    /*
     * Expose our View Class on our index object, so the View can be instantiated in our app.
     */
    window.index.View = View;
}(window));