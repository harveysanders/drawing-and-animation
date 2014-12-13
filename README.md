Drawing & Animating
===

###The Display List

The CreateJS framework uses a nestable display-list, similar to the Flash ecosystem.  The display list is like a tree, allowing us to add display objects onto a stage (think of the stage like the stage of a theater), and once added to the stage, those display objects become visible.  Removed from the stage, the display objects are no longer rendered, and are not visible to the user.

The stage is the top most parent display object in the display hierarchy.  And display objects are nestable, meaning, we can group other display objects inside a (parent) display object, such that when we move the parent object, the children display objects move with it.

There are several types of display objects, each specialized for a particular purpose, like the Shape Class, which is generally used for drawing simple graphics.  We'll work with many of them in our Motion Poem series.

###Added and Positioning Display Objects on the Stage

CreateJS draws its visual elements, display objects, onto the HTML5 Canvas element, which is wrapped by the Stage object.

Display objects are positioned using a cartesean coordinate system on x and y axis, which x axis values incrementing to the right, and the y axis values incrementing downward.  The top left corner of the stage is at 0, 0, meaning the value of x is 0 and the value of y is 0.  So, if you place a display object at the top left corner of the stage, its x and y position values will both equal 0.

We're going to work with the Graphics API of the Shape Class, however, in our exercise, we've wrapped the API in a utility module, called `draw` to abstract away some of the boilerplate.

For more information on the CreateJS Graphics API, see:

http://www.createjs.com/Docs/EaselJS/classes/Graphics.html

##Lesson Steps

###Creating and Adding Shapes to the Display List

Let's create and position some shapes onto the stage:  Open up the file at:

    `js/view.js`

####TODO 1 : Create a Rectangle Background

Find the `p.initialize()` function, and using our `draw` utility, add a rectangle to our view using the `addChild` API:

````javascript
p.initialize = function () {
    // TODO 1 : Add a background //
    view.addChild(draw.rect(canvas.width, canvas.height, "#4c4c4c", "#000"));
````

The simplified `draw.rect()` API takes values for `width`, `height` `color` and `strokeColor`, the color of the border.  We pass the result of the `draw.rect()` to the `view.addChild()` method, which adds the Shape to the display list.

Great, **save the file** (Mac: Command-S, Windows: Ctrl-S), then run the app by:

A) **Selecting the index.html tab**, then **clicking the "Play" button**:

<img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/running-index.html.png">

Upon doing so, wait a second, and in your Console View at the bottom of the IDE, you'll see:

<img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/apache-serving-web-page.png">

B) Now copy (Mac: Command-C, Windows: Ctrl-C) the URL after the log mesage: `Staring Apache httpd, serving`.  The URL should be:

    https://drawing-and-animation-myuser.c9.io/index.html.
    
Make sure you don't copy the trailing _period_, if you do, don't worry, just delete it in the next step, when you paste the URL.  See the red-highlighted box, below:

<img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/copy-server-url.png">

C) Once copied, open up a new tab in Chrome, and paste that URL into the address bar:

<img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/pasting-url.png">

Finally, after pasting the URL in the address bar, press `enter`:

<img src="https://raw.githubusercontent.com/OperationSpark/drawing-and-animation/master/img/background.png">

Alright, pat yourself on the back, you successfully created a rectangle and placed it on our display list!

Awesome, **keep this tab open** - we'll switch back and forth, code in IDE tab, refresh in the app tab to see our changes.

####TODO 2 : Create a Circle

````javascript
    // TODO 2 : Create a circle and add it to our view //
    var circle = draw.circle(20, '#CCC');
    view.addChild(circle);
````

Here we use the simplified drawCircle API of the draw utility, which takes the radius of the circle and its color.

Great stuff, save and switch back to our other tab where the app is running and refresh your browser (Mac: Command-R, Windows: Ctrl-R).  

<img src="https://raw.githubusercontent.com/OperationSpark/drawing-and-animation/master/img/quarter-cirle.png">

Neat, but wait, our cirle is only one quarter visable, why?

Well, the radius of a circle is the length of a line segment from its center to its perimeter, and when we created our cirlce, we gave it a radius of `20`, but by default the _registration point_, that is, the location of 0, 0 within its own coordinate space, is centered in the cirle.

Remember, each display object _also_ has its internal coordinate system - so if we placed some other display object inside our circle at 0, 0, that display object would be positioned at the center of the cirle.

Likewise, when we place the circle on the view (its parent display object) at 0, 0, that equates to the top left corner of the view, and means the center of the cirle will be placed at 0, 0 in the view's coordinate system.  Thus, our circle is only a quarter visible.

Let's move it fully onto the stage by changing the x and y value of the circle, in fact, let's center it in the view:

####TODO 3 : Centering Display Objects

````javascript
    // TODO 3 : Position our circle in the center of the canvas //
    circle.x = (canvas.width - circle.width) / 2;
    circle.y = (canvas.height - circle.height) / 2;
````

Here, we're setting the x and y properties of our circle to be at half the canvas width and height, and because the x/y registration point of the circle is centered in itself, we're good to go.

If our display object was a rectangle or square, to center it on the canvas, we'd have to do:

````javascript
rectangle.x = (canvas.width - rectangle.width) / 2;
rectangle.y = (canvas.height - rectangle.height) / 2;
````

Notice above, we offset for the half the width and height of the rectangle too.  Why

Awesome, save, switch tabs, and refresh:

````javascript
    // TODO 4 : 
    var rectangleOne = draw.rect(20, 100, "#00F", "#000");
    view.addChild(rectangleOne);
````

````javascript
    // TODO 5 : 
    var rectangleTwo = draw.rect(20, 100, "#00F", "#000");
    rectangleTwo.x = canvas.width - rectangleTwo.width;
    rectangleTwo.y = canvas.height - rectangleTwo.height;
    view.addChild(rectangleTwo);
}
````



