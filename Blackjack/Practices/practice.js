// l
// et age = 5    //number
// let name = "Tom"  //string
// let hasOrder = true  //boolean

// function makeOrder() {
//   if (!hasOrder) {
//     console.log("The order has been delivered")
//   }else{
//     console.log("The order is on the way")
//   }
// }

// makeOrder()

// console.log(4 === 3) //false
// console.log(5 > 2) //true
// console.log(12 > 12) //false
// console.log(3 < 0) //false
// console.log(3 >= 3) //true
// console.log(11 <= 11) //true
// console.log(3 <= 2) //false

// if else statement (conditional statement)
// boolean
// array
// DOM manipulation
// callback function
// string concatenation



/* Javascript loop - Count */
// for (let count = 1; count < 11; count = count + 1) {
//     console.log(count)
// }

/*
Challenge 1: Write your first loop
1. Create a for loop that counts from 10 to 100 in step of 10
2. Use console.log to log out the numbers
*/

// for (let i = 10; i < 101; i = i + 10) {
//     console.log(i)
// }

/* Lesson 13b: Array and Loop*/
// let messages = [
//     "Hey, How're you doing Bob? ",
//     "I'm fine and you?", 
//     "Same here, I've been working on my portfolio lately",
//     "That's great",
//     "Thank you!",
//     "Nice to hear from you Bob"
// ]

// stressful/bad method
// console.log(messages)

// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

// for (let i = 0; i < 6; i += 1) {
//     console.log(messages[i]);
// }
    

/* Lesson 13c: for loops, arrays, and DOM
1. Render the sentence in the greetingEl paragraph using for loop and greetingEl.textContent
*/

// let greeting = ["Hello,", "This", "is", "Bob.", "How", "are", "you?"]
// let greetingEl = document.getElementById('greetingEl')
// for (let i = 0; i < greeting.length; i += 1){
//     // console.log(greeting[i])
// greetingEl.textContent += greeting[i] + " "
// }

// Return statement

// let player1Time = 105
// let player2Time = 203

// function raceTime() {
//     if (player1Time > player2Time){
//         return player1Time;
//     } else if(player2Time > player1Time){
//         return player2Time;
//     } else{
//         return player1Time;
//     }
// }

// let myRaceTime = raceTime()

// console.log(myRaceTime)

/*
Challenge 3: Loops and arrays
1. Use a for loop to log the following to the console:

The 5 largest countries of the world:
- China
- India
- United State
- Indonisia
- Pakistan

*/

// let countries = ["The 5 largest countries of the world: ", "- China ", "- India", "- United States", "- Indonesia", "- Pakistan"]
// for (let i = 0; i < countries.length; i += 1){
//     console.log(countries[i])
// }

/* 
Challenge:

Create a function, rollDice(), that returns a random number between 1 - 10
*/
// function rollDice(){
// let flooredNumber =  Math.floor(Math.random() * 10) + 1
// return flooredNumber
// }
// let result = rollDice()
// console.log(result)

// let result = getRandomCard()
// console.log(result)


/* 
Aside: The AND operator (&&)
The OR operator(||)
*/

// console.log(true && true);   // true
// console.log(true && false);  // false
// console.log(false && true);  // false
// console.log(false && false); // false

// let completedProgram = true
// let issueCertificate = true

// if (completedProgram === true){
//     if(issueCertificate === true){
//         generateCertificate()
//     }
// }

// if (completedProgram === true && issueCertificate === true){
//     generateCertificate()
// }

// function generateCertificate(){
//     console.log("Generate certificate.....")
// }




/* 
Aside: The OR operator (||)

console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

*/

/* 
Challenge: Write your first logical operator

1. Create an if statement that checks that both variables are false.
2. If so, run the showSolution() function
*/

// let hasSolvedChallenge = false;
// let hasHintLeft = false;

// if (hasSolvedChallenge === false && hasHintLeft === false){
//     showSolution()
// }

// function showSolution(){
//     console.log("Showing solution.....")
// }

/* 
Challenge:

1. Create two boolean variables, likesDocumentaries and likesStartups
2. Use an OR statement (||) to call recommendMovie() if either of those variables is true
*/

// let likesDocumentaries = false;
// let likesStartups = false;

// if (likesDocumentaries === false || likesStartups === true){
//     recommendMovie()
// }

// function recommendMovie(){
//     console.log("Recommending movie.....")
// }



// Intro to Javascript Object

// let profile = {
//     name: "Bob",
//     age: 25,
//     level: "grade seven",
//     item: ["bag", "sandal", "$50"]
// }

// console.log(profile.item[1]);

// // Array of Object

// const users = [
//     { id: 1, name: "Alice", role: "Admin"},
//     { id: 2, name: "Bob", role: "User"},
//     { id: 3, name: "Charlie", role: "User"}
// ];


/* 
Challenge 1: Objects and functions
1. Create a person object that contains three keys; name. age and country
2. Use yourself as an example to set the values for name, age and the country.
3. Create a function, logData(), that uses the person object to create a string in the 
   following format: "Coach Imran is 35 years old and lives in Nigeria"
4. Call the logData() to verify that it works
*/

// let person = {
//     name: "John",
//     age: 22,
//     country: "Finland"
// }

// function logData(){
//     console.log( person.name + " is " + person.age + " years old and lives in " + person.country)
// }
// logData()


/* 
Challenge 2: If else
1. Create a conditional statement (if/else/else if) that logs out the discount the 
    passenger will get based upon the value of the age variable

 - less than 6 years old   ->  free
 - 6 to 17 years old       -> child discount
 - 18 to 26 years old      -> student discount
 - 27 to 66 years old      -> full price
 - over 66 years old       -> senior citizen discount
*/

// let age = 25

// if (age < 6){
//     console.log("free");
// } else if (age <= 17){
//     console.log("child discount");
// } else if (age <= 26){
//     console.log("student discount");
// } else if (age <= 66){
//     console.log("full price");
// } else{
//     console.log("senior citizen discount");
// }


/* 
Challenge 3: Loops and arrays
1. Use a for loop to log the following to the console:

The 5 largest countries of the world
- China
- India
- United State
- Indonisia
- Pakistan
*/

// let largeCountries = ["China", "India", "United States", "Indonesia", "Pakistan"];
// largeCountries.shift();
// largeCountries.pop();
// largeCountries.unshift("China");
// largeCountries.push("Pakistan");

// console.log("The 5 largest countries of the world:")

// for (let i = 0; i < largeCountries.length; i += 1) {
//    console.log("- " + largeCountries[i]);
// }


/* 
Challenge 4: push, pop, unshift, shift challenge
1. You need to help fixup the largeCountries array so that China and Pakistan are added back into their respective places
2. Use push() & pop() and their counterparts unshift() & shift()
3. Google how to use unshift() & shift()   
*/

// push() → adds an element to the end of the array.
// pop() → removes the last element.
// unshift() → adds an element to the start of the array.
// shift() → removes the first element.

/* 
Challenge 5: Logical operator

1. If it is Friday the 13th, log out "TGIF". use the logical "AND operator"  -> &&
*/

// let dayOfMonth = 13
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday"){
//    console.log("TGIF")
// } else {
//    console.log("Good day")
// }

/* 
Challenge6: Rock papers scissors

1. Create a function that returns a random item from the array
*/

// let hands = ["rock", "paper", "scissor"]
// function randomGame(){
//    let randomIndex = Math.floor(Math.random() * 3)
//    return hands[randomIndex]
// }
// console.log(randomGame())

/* 
Challenge 7: Emoji Fighter
1. When the user clicks on the "pick Fighters" button, pick two random emoji fighters and display them as i.e "🦂 vs 🐯" in the "stage"
*/

let emoji = ["🐺", "🦝", "🦁", "🐻‍❄️", "🐼", "🦂", "🐯", "🦀", "🐍", "🦖", "🐲", "🦄", "🐙", "🦅"]
let stage = document.getElementById('stage')

function randomFighter(){
   let randomEmoji1 = Math.floor(Math.random() * emoji.length)
   let randomEmoji2 = Math.floor(Math.random() * emoji.length)

   stage.textContent = `${emoji[randomEmoji1]} vs ${emoji[randomEmoji2]}`
}

