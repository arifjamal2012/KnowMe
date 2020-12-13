var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question('Whats your name? ');
console.log('Welcome '+ userName);

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer) {
    console.log('You are correct');
    score++;
  }else {
    console.log('Sorry its incorrect');
  }

  console.log('You have scored',score);
  console.log('**********************');

}

var questions = [{
  question:'Whats my name? ',
  answer:'arif'
  
  },
  {
  question:'Where do i live? ',
  answer:'bangalore'
  },
  {
  question:'Whats my job profile? ',
  answer:'software testing'
  }
];


for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}

console.log('Your total score is ', score);