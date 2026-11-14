// Javascript Array - Can be written vertically aswell

let items = ["name", "age", "level", "location"]


// console.log(items)

// To find the length of items in array .length
// console.log(items.length)

// Adding items to the array  .push() method
items.push("Hobby", "favourite food")

// To log out the item with index 3
// console.log(items[3])

// To remove an item
items.pop()

/* 
 Challenge:
 1. Create an array that list your i.e name, occupation, experience, education, location
 2. The items of the array should be strings
 3. Make occupation and location appear in the console
 */

 let info = [ 
"John", 
"Level 3", 
"Fashion designer", 
"Designers at Textile Industry", 
"Graduate",
 "Los Angeles"]

 console.log(info[1])
 console.log(info[5])

 /* 
Array - ordered list of items - composite / complex data type
1. Create an array that describes yourself. Use the three primitive data types you've learned. 
It should contain your name (string), your age (number), and whether you like pizza (boolean) 
*/

let myInfo = ["John", "20", "true"]
console.log(myInfo)

/* 
Array.push() and array.pop()
1. Add your grade to the array
2. Add your hobbies to the array and log out new array
3. Remove the last item of the array and log out the new array
4. Add 1st item to an array that is, a username and log out the new array
5. Remove the first item of the array and log out the new array
6. Extract a portion of an array that is, the last 2 items and log out the new array
*/
 myInfo.push("Grade 4", "Reading")
 console.log(myInfo)

 myInfo.pop()
 console.log(myInfo)

 myInfo.unshift("John123")
 console.log(myInfo)

 myInfo.shift()
 console.log(myInfo)

// Use the splice() method with the following syntax: array.splice(startIndex, deleteCount, item1, item2, ..., itemN);

 myInfo.splice(2)
 console.log(myInfo)

let numberArray = [1, 2, 3, 4, 5]
console.log(numberArray)

numberArray.splice(2, 2, "Bob")
console.log(numberArray)

