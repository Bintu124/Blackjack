/* 
Multi line comment Ctrl + Alt + A
1. variables - holding / storing variables
2. Conditional Statement (if/else or switch)
3. Function - packaging and reusable code the codes
*/


// let name = "Ali'yah"
// name = 'Zainab'
// console.log(name)

// let price = 5;
// price = 20

/* 
String Concatination
1. Challenge: Declare variables  for items (bag). prices (50), country (United State of America)
2. "I bought my ..... at the cheapest rate of ...... in the ....."
*/

// let item = "bag"
// let price = 50
// let country = "United States of America"
// console.log("I bought my " + item + " at the cheapest rate of " + price + " in the " + country)

/* 
Task 1:
Manipulate what is in the DOM by changing its content from 0 to 100. 
DOM - Document Object Model
*/

// let counts = document.getElementById("counts")
// counts.innerHTML = 100

/* Example:
1. Use the function to write the lesser code
2. Call/invoke the function
*/

// function race() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// race()

/* Task 2:
1. initialize the count as 0
2. listen for clicks on the increment button
3. increment the count variable when the button is clicked
4. change the count-el in the HTML to reflect the new count
*/

// let count = 0
// let counts = document.getElementById("counts")
    
// function increment() {
//     count -= 1
//     counts.innerHTML = count
// }

// Pseudo code
/* 
1. Initialize the count as 100
2. listen for clicks on the increment button
3. decrement the count variable when the button is clicked by 4

4. change the count-el in the HTML to reflect the new count
*/

let count = 0
let counts = document.getElementById("counts")

function increment() {
    count += 1
    counts.textContent = count
}

/* 
1. Create a function that logs out the sum of all the laps item
let lap1 = 34;
let lap2 = 34;
let lap3 = 33
*/

// let lap1 = 34;
// let lap2 = 34;
// let lap3 = 33;

// function sums(){
//     let sum = lap1 + lap2 + lap3
//     console.log(sum)
// }

// sums()

/* 
Task:
1. Create two variables name and greeting, The name variable should store your name, and the greeting should store e.g "Hi, my name is "
2. Create a third variable, myGreeting, that concatenates the two strings.
3. Log myGreeting to the console.
*/

// let names = "Bob"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + names
// console.log(myGreeting)

/* 
Lesson 3: Create a save button
Create a function, save(), which logs out the countNumber when it's called.
*/

saveEl = document.getElementById('save-el')

function save() {
    // console.log(count)
    let countStr = count + "  -  "
    // saveEl.innerText += countStr
    saveEl.textContent += countStr
    counts.textContent = 0
    count = 0
}

/* 
Lesson 12: Create a paragraph with an id of save-el
1. Grab the save-el paragraph and store it in a variable called saveEl
2. Create a variable that contains both the count and the dash separator i.e "12-15-"  
3. Render the variable in the saveEL using innterText
NB: make sure to not delete the existing content of the paragraph
*/

/* 
Lesson 13: Debugging Online
Google: innertext alternative mdn
*/
