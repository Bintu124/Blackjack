/* Lesson 1 Challenge:
1. Create two variables, firstCard and secondCard.
2. Set their values to a random number between 2 - 11

3. Create a variable, sum, and set it to the sum of the two cards.

4. Write the conditional according to these rules
/
5. if less than or equal to 20  ->  "Do you want to draw a new card? 😊"
else if exactly 21 ->  "Wohooo! You've got blackjack! 😒"
else ->  "You're out of the game 😂"

Lesson 4: 
1. Add hasBlackjack variable and set it to false
2. Reassign it to true after you have logged out the message when of sum === 21
3. log it out after all

Lesson 5: 
1. Create a variable called isAlive and set it to true
2. Flip its value to false in the appropriate code block
3. Log it out to check that you're doing it right

Lesson 7: Add the message variable
1. Declare a variable called message and assign its value to an empty string
2. Reassign the message variable to the string we're logging out
3. then log out the message itself bellow the conditional statement.

Lesson 8: Link to markup & stylesheet
1. Create a startGame() function. 
2. Move the condition below inside the body of the function.

Lesson 9: Display the message
1. Store the message-el paragraph in a variable called messageEl
2. Display the message in the messageEl using messageEl.textContent

Lesson 10: Display the cards
1. Store the card-el paragraph in a variable called cardEl
2. Display the cards in the cardEl using cardEl.textContent

Lesson 11: Display the sum
1. Store the sum-el paragraph in a variable called sumEl
2. Display the sum in the sumEl using sumEl.textContent

Lesson 12: Create a new card
1. Create a new function called newCard and log out the message "Drawing a new card from the deck..."
2. Create a card variable and hard code its value to a number between 2 to 11
3. Add the new card to the sum variable
4. Call startGame function

Lesson 13: Rename the startGame function
1. Create a new function called startGame() that calls renderGame()

Lesson 14: Use a loop to render cards
1. Create a for loop that renders out all the cards instead of just two

Lesson 15: How to avoid hard code card values / Use a function to set the card value
1. Create a function getRandomCard(), that always return the number 5
2. Use getRandomCard() to set the value of firstCard and secondCard
3. Then use the getRandomCard() to set the value of card as well

Lesson 15b: Make getRandomCard() work
1. Make this function return a random number between 1 and 13

Lesson 15c: Complete getRandomCard() function
1. if 1     ->  return 11
   if 11-13  -> return 10  
 
Lesson 16: Assign values in the startGame function
 1. isAlive = true
 2. Generate two random numbers
 3. Re-assign the cards and sum variables so that the game can start

Lesson 17: Only trigger newCard() if you're allow to
1. Only allow the player to get a new card if she IS alive and does NOT have Blackjack 
   i.e if isAlive is true and if hasblackjack is false

Lesson 18: Object intro
1. Create a paragraph with an id of "player-el"
2. Create the player object. Give it two keys, name and chips and set their values.
3. Grab ahold of player-el paragraph and store it in a variable called playerEl
4. Render the player's name and chips in playerEl

*/

// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let messageEl = document.getElementById('message-el')
let cardEl = document.getElementById('card-el')
let sumEl = document.getElementById('sum-el')
let message = ""

let player = {
    name: "Bob",
    chips: 100,

    sayHello: function (){
        console.log("Hello jane!");
        
    }
}
player.sayHello()
let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber =  Math.floor(Math.random() * 13) + 1

    if (randomNumber > 10){
        return 10;
    } else if (randomNumber === 1){
        return 11;
    } else{
        return randomNumber;
    }
}

function startGame(){
    isAlive = true
    
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){ 
    cardEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i += 1){
        // console.log(cards[i])
        cardEl.textContent += cards[i] + " "
    }
    // cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want to draw a new card? 😊"
    } else if (sum === 21){
        message = "Wohooo! You've got blackjack! 😒",
        hasBlackjack = true
    } else {
        message = "You're out of the game 😂",
        isAlive = false
    }

    messageEl.textContent = message

    // console.log(hasBlackjack)
    // console.log(isAlive)
    // console.log(message)
}

function newCard(){
    // console.log("Drawing a new card from the deck..")
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard()
        sum += card
        // console.log(sum)
        cards.push(card)
        renderGame()
        // console.log(cards)
    }
}



// JS-part2: Course Outline:
//    - Arrays
//    - Objects
//    - Booleans
//    - If else statements
//    - Comparism operators
//    - Logical operators
//    - for loops
//    - The Math object
//    - The return statement
//    - DOM manipulation
