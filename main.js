const quiz = [
  ['What is Superman\'s real name?', 'Clark Kent'],
  ['What is Wonder Woman\'s real name?', 'Diana Prince'],
  ['What is Batman\'s real name?', 'Bruce Wayne']
];

let score = 0;

for (let [question, answer] of quiz) {
  let response = prompt(question);

  if (response === answer) {
    alert('Correct!');
    score++;
  } else {
    alert(`Wrong! The correct answer was ${answer}`);
  }
}

alert(`Game over, you scored ${score} point${score !== 1 ? 's' : ''}`);