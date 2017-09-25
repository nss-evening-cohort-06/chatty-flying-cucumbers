# Chatty Cucumbers

## Contributors:

 * [Robbie Shock](https://github.com/RobertShock)
 * [Gina Antonini](https://github.com/GinaAntonini)
 * [Juno Lee](https://github.com/Junochop)
 * [Jessica Rodgers](https://github.com/jessrod11)

## Requirements
* Use Bootstrap
* Complete 1 of the bonus items
* Balanced github contributions
* Completed Readme
* No grunt errors
* Use Browserify


Check out the [simple wireframe](https://app.moqups.com/chortlehoort/uGBbLbK46Y/view/page/a3bd0c733) for this application on Moqups.com. You can make your final interface as fancy as you like, but keep the general layout similar to the wireframe.

## Navigation Bar
1. Create an element to serve as the navigation bar for your application.
2. Create an element to hold the logo for your application. It can be as simple as text, but if you want to find an image, that's fine.
3. Create a input field for a user to enter in a message.
4. Add an event listener for "keypress" and detect when then return key has been pressed in the message field.
5. When return key is detected, you'll create a new message (see details below).
6. Create a button to clear all messages.
7. When the user clicks the clear messages button, all current chat messages should be removed from the application.
8. If there are no messages, then the clear messages button should be disabled (see example above).
9. The navigation bar should remain at the top of the screen, even if the contents of the page start to scroll.

## Page Options
1. Create two checkboxes below the message input field. One labeled "Dark theme" and the other labeled "Large text".
2. When the user clicks on the dark theme checkbox, change the background color of your application to a dark gray, and the font color for messages should be white(ish)... you pick.
3. If the user unchecks the box, the background color should change back to white with black text for messages.

## Messages
1. When the page is first loaded, you must load 5 messages from a local JSON file and pre-fill a message area `<div>` below the input field that will also hold all new messages as they get created.
2. When the user presses the return key in the message field, the new message should be inserted into the message area.
3. The message should have a button displayed after it with the text "Delete" inside of it.
4. When the delete button next to a message is clicked, only that message should be removed from the DOM.

## Browserify
* Create multiple Browserify modules, following the Single Responsibility Principle, that perform the following functions.
1. main.js - initialize XHR, activate events, and populate DOM
2. Appropriately named modules to:
  		
  	* Get messages
	* Delete messages
	* Add messages
3. Other modules as needed


## Bonus- Timestamps
1. Put a timestamp on each message.
2. Again, this will change the structure of your JSON file.
3. To help with displaying times check out MomentJS


