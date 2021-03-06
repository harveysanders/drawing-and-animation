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


        // TODO 4 : Create rectangle paddles //
        var rectangleOne = draw.rect(20, 100, "00F", "#000");
        view.addChild(rectangleOne);
        
        var rectangleTwo = draw.rect(20, 100, "#00F", "#000");
        rectangleTwo.x = canvas.width - rectangleTwo.width;
        rectangleTwo.y = canvas.height - rectangleTwo.height;
        view.addChild(rectangleTwo);

        // Create scoreboard //
        var text = new createjs.Text("Hello World", "20px Arial", "#ff7700"); text.x = 100; text.textBaseline = "alphabetic";
        view.addChild(text);
        var playerScore = new createjs.Text(0);

        // TODO 5 : Add some velocity properties to our display objects // 
        circle.velocityX = 5;
        circle.velocityY = -5;
        rectangleTwo.velocityY = 6;

        // TODO 6 : Add a reference to our shapes on the view object //
        view.circle = circle;
        view.rectangleOne = rectangleOne;
        view.rectangleTwo = rectangleTwo;
        view.text = text;
        
    };

    p.update = function () {
        // TODO 7 : Create some local variables that we will use often //
        var circle = view.circle;
        var rectangleOne = view.rectangleOne;
        var rectangleTwo = view.rectangleTwo;
        var playerScoreCount = 0;
        var AIScoreCount = 0;

        // TODO 8 : Update the position of the circle based on its x-axis and y-axis velocity //
        circle.x += circle.velocityX;
        circle.y += circle.velocityY;

        // TODO 9 : Code the circle's top and bottom boundary check //
        if ((circle.y - circle.radius) < 0) {
            circle.velocityY = -circle.velocityY;
        }
        if((circle.y + circle.radius) > canvas.height) {
            circle.velocityY = -circle.velocityY;
        }
        // TODO 10 : Code the player's movement //
        rectangleOne.y = stage.mouseY - rectangleOne.height / 2;
        
        // Player's boundary check //
        if (rectangleOne.y + rectangleOne.height > canvas.height) {
            rectangleOne.y = canvas.height - rectangleOne.height;
        } else if (rectangleOne.y < 0) {
            rectangleOne.y = 0;
        }

        // TODO 11 : Write AI's movement //
        if ((rectangleTwo.y + rectangleTwo.height / 2) < (circle.y - 14)) {
            rectangleTwo.y = rectangleTwo.y + rectangleTwo.velocityY;
        } else if ((rectangleTwo.y + rectangleTwo.height / 2) > (circle.y + 14)) {
            rectangleTwo.y = rectangleTwo.y - rectangleTwo.velocityY;
        }

        // TODO 12: Implement the player's collision check //
        if(circle.x - circle.radius <= rectangleOne.width
            && circle.x - circle.radius > 0
            && circle.y >= rectangleOne.y
            && circle.y < rectangleOne.y + rectangleOne.height)
        {
            circle.velocityX *= -1;
        }    

        // TODO 13 :  Create the AI collision check //
        if (circle.x + circle.radius > rectangleTwo.x
            && circle.x + circle.radius < rectangleTwo.x + rectangleTwo.width
            && circle.y >= rectangleTwo.y
            && circle.y < rectangleTwo.y + rectangleTwo.height) {
                circle.velocityX *= -1;
            }
        // Score counter //
        if (circle.x + circle.radius > canvas.width) {
            playerScoreCount += 1;
        }
        if (circle.x - circle.radius < 0) {
            AIScoreCount += 1;
        }
        console.log("Player Score = " + playerScoreCount + "\n" + "Computer Score = " + AIScoreCount);
        
    };

    /*
     * Expose our View Class on our index object, so the View can be instantiated in our app.
     */
    window.index.View = View;
}(window));