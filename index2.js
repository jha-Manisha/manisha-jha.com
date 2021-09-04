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
var question = [
{
 question : "1. Keyboard shortcut to copy ? ",
 answer : "Ctrl + C",
} ,
{
 question : "2. Keyboard shortcut to cut ? ",
 answer : "Ctrl + X",
} ,
{
 question : "3. Keyboard shortcut to paste ? ",
 answer : "Ctrl + V",
} ,
{
 question : "4. Keyboard shortcut to Switch between open apps? ",
 answer : "Alt + Tab",
} ,
{
 question : "5. Keyboard shortcut to Maximize Window ? ",
 answer : "F11",
} ,
{
 question : "6. Keyboard shortcut to Undo an action ? ",
 answer : "Ctrl + Z",
} ,
{
 question : "7. Keyboard shortcut to Rename the selected item ? ",
 answer : "F2",
} ,
{
 question : "8. Keyboard shortcut to Show your password on the sign-in screen ? ",
 answer : "Alt + F8",
} ,
{
 question : "9. Keyboard shortcut to Select all items in a document or window. ? ",
 answer : "Ctrl + A",
} ,
{
 question : "10. Keyboard shortcut to Stop or leave the current task? ",
 answer : "Esc",
} ,
]
for(var i = 0 ; i < question.length ; i++){
  currentQuestion = question[i];
  game(currentQuestion.question , currentQuestion.answer);
}
console.log("YAY ! you scored :" , score)