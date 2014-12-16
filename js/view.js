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
        view.addChild(draw.rect(canvas.width, canvas.height, "#4c4c4c", "#000"));
       
       

        // TODO 2 : Create a circle and add it to our view //
        var circle = draw.circle(20, '#CCC');
        view.addChild(circle);

        // TODO 3 : Position our circle in the center of the canvas //
        circle.x = canvas.width / 2;
        circle.y = canvas.height / 2;

        // TODO 4 : 
        var rectangleOne = draw.rect(20, 100, "00F", "#000");
        view.addChild(rectangleOne);
        
        var rectangleTwo = draw.rect(20, 100, "#00F", "#000");
        rectangleTwo.x = canvas.width - rectangleTwo.width;
        rectangleTwo.y = canvas.height - rectangleTwo.height;
        view.addChild(rectangleTwo);

        // TODO 5 : Add some velocity properties to our display objects // 
        circle.velocityX = 5;
        circle.velocityY = -5;
        rectangleTwo.velocityY = 6;

        // TODO 6 : Add a reference to our shapes on the view object //
        view.circle = circle;
        view.rectangleOne = rectangleOne;
        view.rectangleTwo = rectangleTwo;
        
    };

    p.update = function () {
        // TODO 7 : Create some local variables that we will use often //
        var circle = view.circle;
        var rectangleOne = view.rectangleOne;
        var rectangleTwo = view.rectangleTwo;

        // TODO 8 : Update the position of the circle based on its x-axis and y-axis velocity //
        circle.x += circle.velocityX;
        circle.y += circle.velocityY;

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