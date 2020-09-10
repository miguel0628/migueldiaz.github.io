
<script >

function Quiz(questions) {
this.score = 0;
this.questions = questions;
this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
if(this.getQuestionIndex().isCorrectAnswer(answer)) {
this.score++;
}

this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
this.text = text;
this.choices = choices;
this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
return this.answer === choice;
}


function populate() {
if(quiz.isEnded()) {
showScores();
}
else {
// show question
var element = document.getElementById("question");
element.innerHTML = quiz.getQuestionIndex().text;

// show options
var choices = quiz.getQuestionIndex().choices;
for(var i = 0; i < choices.length; i++) {
var element = document.getElementById("choice" + i);
element.innerHTML = choices[i];
guess("btn" + i, choices[i]);
}

showProgress();
}
};

function guess(id, guess) {
var button = document.getElementById(id);
button.onclick = function() {
quiz.guess(guess);
populate();
}
};


function showProgress() {
var currentQuestionNumber = quiz.questionIndex + 1;
var element = document.getElementById("progress");
element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
var gameOverHTML = "<h1>Result</h1>";
gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
var element = document.getElementById("quiz");
element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
new Question("Who invented JavaScript?", ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "Tim bernes"], "Brendan Eich"),
new Question("Inside which HTML element do we put the JavaScript?",
["scripting", "html", "script", "style"], "script"),
new Question("Which of the following is not a reserved word in JavaScript?", ["interface", "throws", "program", "short"], "program"),
new Question("Which of the following is an advantage of using JavaScript?", ["Increased interactivity.", "Less server interaction.", "Immediate feedback from the users.", "All"], "All"),
new Question("Which tool can you use to ensure code quality?", ["Angular", "jQuery", "RequireJS", "ESLint"], "ESLint"),
new Question("What is the correct syntax for adding comments in JavaScript?", ["!–This is a comment–&gt", "/This is a comment", " –This is a comment ", "**This is a comment**"], "/This is a comment")
  
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
</script>
