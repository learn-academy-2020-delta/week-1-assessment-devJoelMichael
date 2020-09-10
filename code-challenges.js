// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212
// Create a function (using a if/else if) that determins if the number input is above, below, or the same as the boiling point.
function bolingPoint(beCareful) {
  if(beCareful < 212) {
        return `${ temp1 } is below boiling point.`
    } else if(beCareful > 212){
        return `${ temp2 } is above boiling point.`
    } else if(beCareful === 212){
        return `${ temp3 } is at boiling point.`
    } else {
        return "PLEASE GIVE ME SOME HEAT...or dont...I...i...don't care."
}
}
console.log(bolingPoint(temp1)); // says, "35 is below boiling point"
console.log(bolingPoint(temp2)); // says, "350 is above boiling point"
console.log(bolingPoint(temp3)); // says, "212 is at boiling point"
// COMPLETED!



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]
// Create a function that multiplies each number in the array by 5 using a for loop.
let multiply = myNumbers1
for(let i = 0; i < myNumbers1.length; i++) {
    console.log(multiply[i] * 5)
}
// OUTCOME: [15, 35, 0, 30, -45]
// COMPLETED!




// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]
// Create a function that multiplies each number in the array by 5 using map.
const multiplies = (array) => {
    return array.map(value => {
        return value * 5;
    })
}
console.log(multiplies(myNumbers2))
// OUTCOME: [40, -35, 0, 30, 10]
// COMPLETED!




// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"
// Create a function that removes all the vowels from a string.
const noVowels = (string) => {
    let newArray = string.split("")
    // Look through all the pieces of the string to take all vowels out.
    let filteredArray = newArray.filter(value => {
        // Make sure that it gets both upper&lower case vowels.
        value = value.toLowerCase()
    return value !== "a" && value !== "e" && value !=="i" && value !=="o" && value !=="u"
    })
    let newString = filteredArray.join("")
      return newString
    }
    console.log("No Vowels:", noVowels(stringWithVowels1));
    console.log("Expected output --> 'HyThrLrnStdnt'\n")
    console.log("No Vowels:", noVowels(stringWithVowels2));
    console.log("Expected output --> 'LvJvScrpt'\n")
    // OUTCOME: 'HyThrLrnStdnt', 'LvJvScrpt'
    // COMPLETED!   




// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"
var notAString1 = true
var notAString2 = 42
// Look through all the pieces of the string to take all vowels out.
const noVowels = (string) => {
// Make sure that if you are only getting a string when function is ran.
  if (typeof(string) !== "string") {
    return string + " is not a string"
  }
  console.log(string)
  let newArray = string.split("")
     console.log(newArray);
  let filteredArray = newArray.filter(value => { 
    // Make sure that it gets both upper&lower case vowels
    value = value.toLowerCase()
        return value !== "a" && value !== "e" && value !=="i" && value !=="o" && value !=="u" 
    })
  let newString = filteredArray.join("")
    return newString
  }
  console.log("With No Vowels:", noVowels(stringWithVowels1));
  console.log("Expected output --> 'HyThrLrnStdnt'\n")
  console.log("With No Vowels:", noVowels(stringWithVowels2));
  console.log("Expected output --> 'LvJvScrpt'\n")
  console.log(noVowels(notAString1));
  console.log("Expected output --> 'true is not a string'\n")
  console.log(noVowels(notAString2));
  console.log("Expected output --> '42 is not a string'\n")
  // OUTCOME: 'HyThrLrnStdnt', 'LvJvScrpt', 'true is not a string', '42 is not a string'
    // COMPLETED!  



// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ { name: "Itchy", animal: "mouse" }, { name: "Stimpy", animal: "cat" }, { name: "Daffy", animal: "duck" }, { name: "Scratchy", animal: "cat" }, { name: "Ren", animal: "dog" }, { name: "Felix", animal: "cat" }]
// Create a function that takes the toonimals array.
const cartoons = (array) => {
    // Make sure it returns an array with only the toon objects that are cats.
    return array.filter(value => {
        return value.animal === "cat";   
    })
}
console.log(cartoons(toonimals)); 
// Output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]
// COMPLETED!



// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

var toonimals = [ { name: "Itchy", animal: "mouse" }, { name: "Stimpy", animal: "cat" }, { name: "Daffy", animal: "duck" }, { name: "Scratchy", animal: "cat" }, { name: "Ren", animal: "dog" }, { name: "Felix", animal: "cat" }]

// Create a function that returns only the names of the non-cats.
const looneyTunez = (array) => {
    // Make sure it returns only the names of the non-cats.
    return array.filter(element => {
        return element.animal !== "cat" 
    // Make sure to only get the names of the characters, not the other parts of the array.
    }) .map(element => element.name)
}
console.log(looneyTunez(toonimals))
  // OUTCOME: "Itchy" "Daffy" "Ren"
// COMPLETED!  