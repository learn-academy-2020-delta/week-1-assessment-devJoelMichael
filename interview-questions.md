# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a function? Why would you use one?

  Your answer: 
  - A function is a set of statements/goals that can be used over and over (called over and over) again in your code.

  Researched answer:
  - Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.
  <!-- AWNSER FOUND: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions -->

2. What is the difference between .map() and .filter()?

  Your answer: 
  - .map() returns a new array with the same type of length. .filter() returns a new array but is more specific (smaller, takes things out, makes it look cleaner, or finding something you need it to in the old array)

  Researched answer:
  - They do different things: .filter() returns a subset of the elements from the original array, while .map() produces an array with new, different entries based on the elements in the original array.
  <!-- ANSWER FOUND: https://discuss.codecademy.com/t/what-s-the-difference-between-filter-and-map/342066 -->

3. What is the difference between console.log() and return?

  Your answer: 
  - console.log() is a tool to let us see if the program runs since its not connected to a "function website yet" (can be used in google chrome and firefox in the inspect and then go to console). 
  - Return is what we would see if we were online, what the user would see or get. It is completeing the function, or the output of the functions task(s).

  Researched answer:
  - Hey, I kinda see where you are coming from. This is an abstract concept to get your head around. If you think of programming as a conversation between you and the machine then: "console.log" is a way for the machine to tell you, the programmer something and "return" is a mechanism for the machine to tell another part of its program something.
  <!-- ANSWER FOUND: https://www.quora.com/What-is-the-difference-between-console-log-and-return-in-JavaScript#:~:text=Difference%20between%20console.-,log%20and%20return%20in%20javascript%3F,by%20F12)%20of%20the%20browser. -->

4. In regards to functions, what is an argument?

  Your answer: 
  - An argument is what we call back to using console.log(myFunction(myOriginalThingIAmCallingBackTo)). It is pretty much the answer we are trying to get from the function. 

  Researched answer:
  - The parameters, in a function call, are the function's arguments. JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations. If a function changes an argument's value, it does not change the parameter's original value. Changes to arguments are not visible (reflected) outside the function.
  <!-- ANSWER FOUND: https://www.w3schools.com/js/js_function_parameters.asp#:~:text=Arguments%20are%20Passed%20by%20Value,change%20the%20parameter's%20original%20value. -->

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer:
  - Navigator - The role of the Nav is to talk through what we are trying to accomplish, work through the problems, and be looking ahead to see what will be needed. Also looking out for mistakes or errors in the Drivers code.
  - Driver - The role of the Driver is to be the one typing and paying attention to where things are going and making sure the code is typed correctly and neatly. The Driver can also give input and advice but ultimatly listens to the Navigator more times than not (if not all the time).

  Researched answer:
  - Pair programming is an agile software development technique in which two programmers work together at one workstation. One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed in. The two programmers switch roles frequently.
  - While reviewing, the observer also considers the "strategic" direction of the work, coming up with ideas for improvements and likely future problems to address. This is intended to free the driver to focus all of their attention on the "tactical" aspects of completing the current task, using the observer as a safety net and guide.
  <!-- ANSWER FOUND: https://en.wikipedia.org/wiki/Pair_programming#:~:text=Pair%20programming%20is%20an%20agile,two%20programmers%20switch%20roles%20frequently. -->

6. What is TDD? Describe the work flow associated with TDD.

  Your answer: 
  - Test with Jest to make your life the best. A lot of times we need to make sure our code is doing the right thing before we put it into practice. Jest makes this a, mostly, simple process by giving us the tools we need to check our code works correctly.

  Researched answer:
  - TDD is an innovative software development approach where tests are written, before writing the bare minimum of code required for the test to be fulfilled. The code will then be refactored, as often as necessary, in order to pass the test, with the process being repeated for each piece of functionality. The below illustration shows how it works. To summarise, write minimal code and refactor continuously in order to satisfy the test.
  From this illustration we can define the sequence of steps for TDD as below:
  Write test
  Run test
  Check for failed tests
  Make changes to the code
  Repeat from step 2
  <!-- ANSWER FROM: https://blog.testlodge.com/what-is-tdd/ -->


7. What is something we did in class this week you found helpful?  

  Your answer: 
  - This whole thing is amazing and overwhelming. I think the added stress of trying to switch a career in the middle of all things COVID related and having a baby in December gets to me at times. I really want to learn and be sucessful. For me its not a well maybe next time, its a you need to get this right and get hired asap or your family is in danger of either moving into someplace with family/friends or picking up and leaving all of that to somewhere cheaper and get another trade job (not that there is anything wrong with that type of work and I would do it for my family, just not what either one of us would have instore for our lives.)
  - Ultimatly this has been amazing to learn next to people, I do really enjoy the pair programming (although at times when questions are really easy its hard to just not let the driver do it or if the driver just does it stop them lol). I think I have learned a lot about myself and am still learning what teaches me the best, how do I intake knowledge (havn't done school since like 2010?), and how best to take notes/study after hours. 
  - I love the if/else stuff and love learning more and more what functions are and what they do! 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React
- Yarn
- React State
- CRUD
- this
