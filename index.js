var readlinesync = require("readline-sync");
var chalk = require("chalk");

var name = readlinesync.question("what is your name? ");
 var score = 0;

 console.log( "welcome " + "aboard! " + chalk.underline.bgRed(name));

 var highscores = [
  {
    name: "Viky",
    score: "5"
  } ,
  {
    name: "Mugil",
    score: "4"
  }
];

 var gameofthrones = readlinesync.question("do you know about game of thrones ? ");

 if (gameofthrones === "Yes") {
   console.log("Great! Try to answer the upcoming questions as much as you can. ");
 } else { 
   console.log(
     "still give it a try you will have some fun. " 
   );
 }
 function play(question,answer) {
   var userAnswer = readlinesync.question(question)
   if (userAnswer === answer ){
   console.log("You are absolutely correct ");
   score = score + 1; 
 }
 else {
   console.log("dont lose  hope, try to get the next one!");
   score = score - 1;
 }
console.log( "Your score " + score );
console.log("--------");
 };

 var questions = [
   { 
     question: "When was the pilot episode aired? ",
     answer: "2011", 
     
   } ,
 {
  question: "what  was the name of the child which Lyanna Stark and Rhaegar Targaryen had? " ,
  answer: "Aegon Targaryen"
} , 
{
  question: "who killed the mad king? " , 
  answer:"Jamie Lannister"
} , 
{
  question: "Leave one wolf alive,the sheep are never safe,to whom was this reffered to? " , 
  answer: "Arya Stark"
} ,
{
  question: "you know nothing ____ ? ",
  answer: "Jon Snow"
}


 ];


 for ( var i = 0 ; i < questions.length ; i++ ) {
   var currentQuestion = questions[i];
   play (currentQuestion.question , currentQuestion.answer)
 };
console.log( "yay! thank you " + name + " for coming till the end, you have scored " + score + " points");

for (var i=0; i<highscores.length; i++) { 
  var person = highscores[i];
  var name = person.name;
  var person_score = person.score;

 

}
if(score>person_score){
  console.log("you scored greater than" , name);
}
else if(score<person_score) {
  console.log("you scored less than" , name);
}
else {
  console.log("you scored same as " , name);
}