Drawing & Animating
===

###The Display List

The CreateJS framework uses a nestable display-list, similar to the Flash ecosystem.  The display list is like a tree, allowing us to add display objects onto a stage (think of the stage like the stage of a theater), and once added to the stage, those display objects become visible.  Removed from the stage, the display objects are no longer rendered, and are not visible to the user.

The stage is the top most parent display object in the display hierarchy.  And display objects are nestable, meaning, we can group other display objects inside a (parent) display object, such that when we move the parent object, the children display objects move with it.

There are several types of display objects, each specialized for a particular purpose, like the Shape Class, which is generally used for drawing simple graphics.  We'll work with many of them in our Motion Poem series.

###Added and Positioning Display Objects on the Stage

CreateJS draws its visual elements, display objects, onto the HTML5 Canvas element, which is essentially the Stage.  Display objects are positioned using a cartesean coordinate system on x and y axis, which x axis values incrementing to the right, and the y axis values incrementing downward.  The top left corner of the stage is at 0, 0, meaning the value of x is 0 and the value of y is 0.  So, if you place a display object at the top left corner of the stage, its x and y position values will both equal 0.

We're going to work with the Graphics API of the Shape Class.  The documetation of the API, which you'll want to reference often to learn or relearn how to draw, say, a circle or rectangle, is here:

http://www.createjs.com/Docs/EaselJS/classes/Graphics.html

Let's place some display objects, some shapes, onto the stage:  Open up the file at:

    `js/view.js`

Find the `initialize()` function, and create a circle Shape:

````javascript
p.initialize = function () {
    // TODO 1 : Add a background //
    view.addChild(draw.rect(canvas.width, canvas.height, "#4c4c4c", "#000"));

    // TODO 2 : Create a circle and add it to our view //
    var circle = draw.circle(20, '#CCC');
    view.addChild(circle);

    // TODO 3 : Position our circle in the center of the canvas //
    circle.x = (canvas.width - circle.width) / 2;
    circle.y = (canvas.height - circle.height) / 2;

    // TODO 4 : 
    var rectangleOne = draw.rect(20, 100, "#00F", "#000");
    view.addChild(rectangleOne);
    
    // TODO 5 : 
    var rectangleTwo = draw.rect(20, 100, "#00F", "#000");
    rectangleTwo.x = canvas.width - rectangleTwo.width;
    rectangleTwo.y = canvas.height - rectangleTwo.height;
    view.addChild(rectangleTwo);
}
````

Great stuff, save and open or refresh your index.html page.  Neat, but wait, our cirle is only one quarter visable, why?

Well, the radius of a circle or sphere is the length of a line segment from its center to its perimeter, and when we created our cirlce, we gave it a radius of `40`, but by default the _registration point_, that is, the location of 0, 0 within its own coordinate space, is centered in the cirle.  Remember, each display object _also_ has its internal coordinate system - so if we placed some other display object inside our circle at 0, 0, that display object would be place at the center of the cirle.  Likewise, when we ask the circle to be place on the stage (its parent display object) at 0,0, which, for the stage, we know is the top left corner, that means the center of the cirle will be placed at 0, 0 in the stage's coordinate system.  Thus, our circle is only a quarter visible.

Let's move it fully onto the stage by changing the x and y value of the circle.

