CODING CHALLENGE 4 from The Complete JavaScript Course from Udemy by Jonas Schmedtmann

  Let's build a fun quiz game in the console!

  1. Build a function constructor called Question to describe a question. A question
     should include:
    a) The question itself
    b) The answers from which the player can choose the correct one (choose an adequate
       data structure here: array, object, etc.)
    c) The correct answer (I would use a number for this)

  2. Create a couple of questions using the constructor

  3. Store them all inside an array

  4. **It originally said to choose a random question (see below), but I chose to loop through all the questions that I had and then end the quiz after all questions had been asked**
     

     Select one random question and log it on the console, together with the possible
     answers (each question should have a number). HINT: write a method for the Question
     objects for this task

  5. Use the 'prompt' function to ask the user for the correct answer. The user should 
     input the number of the correct answer such as you displayed on Task 4

  6. Check if the answer is correct and print to the console whether the answer is correct
     or not. HINT: Write another method for this.

  7. Suppose this code would be a plugin for another programmer to use in their code. So
     make sure that all your code is private and doesn't interfere with the other 
     programmer's code. HINT: we learned a special technique to do exactly that.


  -----Expert Level-----

  8. After you display the result, display the next random question, so that the game
     never ends. HINT: write a function for this and call it right after displaying
     the result

  9. Be careful: after Task 8, the game literally never ends. So include the option to 
     quit the game if the user writes 'exit' instead of the answer. In this case, DON'T
     call the function from task 8.

  10. Track the user's score to make the game more fun! So each time answer is correct, 
      add 1 point to the score. HINT: I'm going to use the power of closures for this,
      but you don't have to, just do this with the tools you feel more comfortable at 
      this point.

  11. Display the score in the console. Use yet another method for this.
