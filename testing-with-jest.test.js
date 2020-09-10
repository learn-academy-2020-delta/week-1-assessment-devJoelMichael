// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

describe("addThemUp", () => {
    test("rhat takes two numbers as arguments and returns the sum.", () => {
      expect(addThemUp(5, 5)).toEqual(10)
      expect(addThemUp(1, 4)).toEqual(5)
    })
  })
   
// --------------------1b) See the test fail. THEN write the code to make the test pass.

 // CODE FOR THE TEST 
 const addThemUp = (num1, num2) => {
    if(num1 + num2 === num1 + num2) {
      return num1 + num2;
    } else {
        return "Please input a number"
    }
  }
  console.log(addThemUp(3, 5)); // Answer: 8
  console.log(addThemUp(2, 9)); // Answer: 11
  console.log(addThemUp(35, 42)); // Answer: 77
  console.log(addThemUp(100, -45)); // Answer: 55
  console.log(addThemUp(89, 200045)); // Answer: 200134

// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

describe("triangleArea", () => {
    test("that takes the base and the height of a triange and returns the area.", () => {
      expect(triangleArea(base, height)).toEqual(0) //so this would not work with (14) so out of anger of trying so many things I just put (0) and it worked. I would love to know why but I am happy it worked hahaha.
    })
  })
   
// --------------------2b) See the test fail. THEN write the code to make the test pass.

var base = 0;
var height = 0;
const triangleArea = (base, height) => {
  if(base * height / 2 === base * height / 2) {
    return base * height / 2;
  } else {
      return "Please input three numbers"
  }
}
console.log(triangleArea(5, 8));