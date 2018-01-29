class Question {
  constructor(question, answerChoices, correctAnswer) {
    this.question = question;
    this.answerChoices = answerChoices;
    this.correctAnswer = correctAnswer;
  }

  displayQuestion() {
    console.log(this.question);
    for (let i = 0; i < this.answerChoices.length; i++) {
      console.log(i + ': ' + this.answerChoices[i]);
    }
  }

  checkAnswer(response, fn) {
    if (this.answerChoices[response] === this.correctAnswer) {
      fn(true);
    } else {
      fn(false);
    }
  }
}

const q1 = new Question('How many sickles are in a galleon?', [20, 18, 17, 29, 15], 17);
const q2 = new Question(
  'What division in the Ministry of Mangic does Arthur Weasley work in?',
  [
    'Department of Mysteries',
    'Magical Law Enforcement Patrol',
    'Misuse of Muggle Artefacts Office',
    'Improper Use of Magic Office'
  ],
  'Misuse of Muggle Artefacts Office'
);
const q3 = new Question(
  'What incantation fixes a broken Vanishing Cabinet?',
  ['Harmonia Nectere Passus', 'Anteoculatia', 'Ventus Duo', 'Reparo'],
  'Harmonia Nectere Passus'
);

const allQuestions = [q1, q2, q3];
let score = 0;

function keepScore(check) {
  if (check === true) {
    score++;
    console.log('Correct!');
    console.log('Your current score is: ' + score);
  } else {
    console.log('Incorrect!');
    console.log('Your current score is: ' + score);
  }
}

function loopQuestions(arrayOfQuestions) {
  for (let i = 0; i < arrayOfQuestions.length; i++) {
    arrayOfQuestions[i].displayQuestion();
    const guess = prompt('Enter the number of the correct answer');
    arrayOfQuestions[i].checkAnswer(guess, keepScore);
  }
  console.log('End of quiz! Thanks for playing!');
}

loopQuestions(allQuestions);
