Name
----------------------------------------------------------------------------------------------------------------
Sliding Jigsaw

Description
----------------------------------------------------------------------------------------------------------------
A simple sliding 3 * 3 tiled jigsaw puzzle. Background picture is obtain from Unsplash API. 

Takeaways
----------------------------------------------------------------------------------------------------------------
Managed to scour through the web for various sources on how to achieve this sliding jigsaw. 
Most notably the following programming logics/concepts helped to put this project together. 

1. Using the Array.from() method returns an Array object from any object with a length property or an iterable object.
    JS 6


2. Using CSS custom properties: Properties name with prefixed --, this enables us to use it in a var() CSS function.
    The var() function is a handy way to provide a default value, or defining second parameter to the function.
    More can be found at https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties. JS 28-34

3. Using of the getPropertyValue() method returns the value of the specified CSS property & the setProperty() method 
    sets a new or modifies an existing CSS property in a CSS declaration block. This enables us to assign them with 
    new values. JS 33-34

4. Using JS object keys function. For example, I am able to clearly denote which cells are movable when the empty tile 
    is in place. Therefore, we can clearly map it out without going through the hassale of writing complex code. 
    Example below. JS 14-22

    A: ["B", "D"], (when A is empty only tile [B] & [D] can move.)
	B: ["A", "C", "E"],
	C: ["B", "F"],
	D: ["A", "E", "G"],
	E: ["B", "D", "F", "H"],
	F: ["C", "E", "I"],
	G: ["D", "H"],
	H: ["E", "G", "I"],
	I: ["F", "H"]

5.  Viewports units. A single declaration on the body element, height: 100vh, constrains your application to the height 
    of the viewport. More can be found at https://css-tricks.com/fun-viewport-units. CSS 9

6. Using of Box Shadow for CSS styling. More can be found at https://cssgenerator.org/box-shadow-css-generator.html. CSS 34.

7. array.reduce() is a array transformation function that runs through the whole array & returns you a single output value. 
    More can be found at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce.
    This together with other functional programming eg .map, .filter & .slice helps us to find you the if the inversion 
    is odd or even. JS 82-99.

8. This is the crux of this sliding puzzle code. We have to find out if our puzzle is solvable in the first place before allow 
    the players to start. If not it will just be wasting time. In summary, we have to check if the number of inversion is odd/even.
    The puzzle is only solvable of the number of inversion is even number. 






Contributions
----------------------------------------------------------------------------------------------------------------
Using an Animate css grid library that can be found at https://github.com/aholachek/animate-css-grid. 
This script enables us to transition CSS grid gracefully from one state to another, instead of using Canvas JS. 

Unsplash CDN

