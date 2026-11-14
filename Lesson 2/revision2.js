/* 
Lesson 1: Render a welcome message

Challenge:
1. Grab a welcome-el paragraph and and store it in a variable called welcomeEl
2. Create two variables (myName & greetings) that contains your name and the greeting we want to render on the page
3. Render the welcome message using welcomeEl.innerText
*/

let welcomeEl = document.getElementById('welcome-el')
let myName = "Bob!"
let greetings = "Welcome "
let message = greetings + myName
welcomeEl.innerText = message

/* 
Lesson 2: Improve the message with string concatenation
1. Add an emoji to the end! 👋
NOTE: WRITE YOUR CODE BELOW HERE
HINT: count = count + 1
*/

welcomeEl.innerText = welcomeEl.innerText + "👋"

