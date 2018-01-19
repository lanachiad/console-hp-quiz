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
