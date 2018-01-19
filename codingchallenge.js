//////////////////////////////////////////////////////////////////////////////
// CODING CHALLENGE 4

/*

  Let's build a fun quiz game in the console!

  1. Build a function constructor called Question to describe a question. A question
     should include:
    a) The question itself
    b) The answers from which the player can choose the correct one (choose an adequate
       data structure here: array, object, etc.)
    c) The correct answer (I would use a number for this)

  2. Create a couple of questions using the constructor

  3. Store them all inside an array

  4. Select one random question and log it on the console, together with the possible
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

*/

(function() {
  function Question(question, answerChoices, correctAnswer) {
    this.question = question;
    this.answerChoices = answerChoices;
    this.correctAnswer = correctAnswer;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answerChoices.length; i++) {
      console.log(i + ': ' + this.answerChoices[i]);
    }
  };

  Question.prototype.checkAnswer = function(guess, callback) {
    var sc;

    if (this.answerChoices[guess] === this.correctAnswer) {
      console.log('Correct!');
      sc = callback(true);
    } else {
      console.log('Incorrect!');
      sc = callback(false);
    }

    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log('Your score is ' + score);
    console.log('----------------------------------------------------');
  };

  var q1 = new Question(
    "What is the shape of Harry's scar?",
    ['wand', 'lightening bolt', 'cat', 'hippogriff'],
    'lightening bolt'
  );

  var q2 = new Question(
    "What platform does the Hogwarts Express arrive on in King's Cross",
    ['9 3/4', '7', '40'],
    '9 3/4'
  );

  var q3 = new Question(
    "What is the name of Harry's best friends?",
    ['Jon and Hermione', 'Ron and Hermy', 'Ron and Hermione'],
    'Ron and Hermione'
  );

  var q4 = new Question(
    "What is the name of Harry's pet owl?",
    ['Arnold', 'Hedwig', 'Timmy', 'Oswald', 'Henry'],
    'Hedwig'
  );

  var q5 = new Question(
    "What is the trio's favorite drink to get in Hogsmede?",
    ['Butterbeer', 'Firewhiskey', 'Pumpkin Juice', 'Fizzing Drinkie'],
    'Butterbeer'
  );

  var allQuestions = [q1, q2, q3, q4, q5];

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  var keepScore = score();

  function nextQuestion() {
    for (var i = 0; i < allQuestions.length; i++) {
      currentQuestion = allQuestions[i];

      currentQuestion.displayQuestion();

      var guess = prompt("Enter the correct answer's number. To exit game, enter 'exit'.");

      if (guess !== 'exit') {
        currentQuestion.checkAnswer(guess, keepScore);
      } else {
        console.log('Thanks for playing!');
      }
    }

    console.log('You finished the quiz!');
  }

  nextQuestion();
})();
