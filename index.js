var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question('What is your name? ');
var welcomeMessage = "WELCOME TO THE GAME , " + userName ;
console.log(welcomeMessage) 
console.log("NOTE : Use only lower case letters to answer." + "\n")
console.log("High Score till now is 7 and if your score more than the high score than please share a screnshot with me." + "\n")
function game(question , answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("YOU ARE RIGHT");
    score = score+1;
     console.log("Current score is : " + score);
       console.log("---------------------------------------------")
  } else {
     console.log("YOU ARE WRONG");
      score = score-1;
       console.log("Current score is : " + score);
  }
}
var question = [{
 question : "1. Do You Know Manisha Jha ? ",
 answer : "yes",
} ,
{
  question : "2. Where do Manisha study ? ",
  answer : "ranchi",
},
{
   question : "3. Where is the home town of Manisha ? ",
  answer : "deoghar", 
},
{
    question : "4. What is the favourite color of Manisha ? ",
  answer : "blue",
},
{
  question : "5. What does Manisha likes most either ' tea ' or  ' coffee '  ? ",
  answer : "tea",
},
{
  question : "6. What does Manisha likes most in pets either cats or dogs? ",
  answer : "dogs",
},
{
  question : "7. Does Manisha wear any rings on finger ? ",
  answer : "yes",
},
{
  question : "8. Does Manisha wear spectacles ? ",
  answer : "yes",
},
{
  question : "9. What is the favourite season of Manisha ? ",
  answer : "winter",
},
{
  question : "10. What is the favourite fruits of Manisha ? ",
  answer : "mango",
},
{
  question : "11. When is Manisha 's birthday ? ",
  answer : "11th june",
},
];
for(var i = 0 ; i < question.length ; i++){
  currentQuestion = question[i];
  game(currentQuestion.question , currentQuestion.answer);
}
console.log("YAY ! you scored :" , score)