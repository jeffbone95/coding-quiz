var startButton = document.querySelector("#startButton");
var startScreen = document.querySelector("#startScreen");
var quizScreen = document.querySelector("#quizScreen");
var question = document.querySelector("#question");
var choiceOne = document.querySelector("#choiceOne");
var choiceTwo = document.querySelector("#choiceTwo");
var choiceThree = document.querySelector("#choiceThree");
var choiceFour = document.querySelector("#choiceFour"); 
var initialScreen= document.querySelector("#initialScreen");
var currentScore= document.querySelector("#currentScore"); 
var timer= document.querySelector("#timer"); 
var questions = [ 
  {
    question: "What is nvidea's latest archetecture?",
    choiceOne: "Pascal",
    choiceTwo: "Volta",
    choiceThree: "Ampere",
    choiceFour: "Turing",
    answer: "Ampere",
  }, 
  {
    question: "The latest version of display port is what?",
    choiceOne: "2.0",
    choiceTwo: "1.6",
    choiceThree: "1.8",
    choiceFour: "1.4",
    answer: "1.4",
  }, 
  { 
    question: "The nvidea CEO is-", 
    choiceOne: "Jensen Huang", 
    choiceTwo: "Lisa Su", 
    choiceThree: "Jack Trenton", 
    choiceFour: "Jim Ryan", 
    answer: "Jensen Huang", 
  }, 
  { 
    question: "Intel is on what generation of desktop processors?", 
    choiceOne: "11th Gen", 
    choiceTwo: "12th Gen", 
    choiceThree: "13th Gen", 
    choiceFour: "14th Gen", 
    answer: "12th Gen", 

  }, 
  { 
    question: "How many nanometers do the newly annouced Ryzen CPU's come in at?", 
    choiceOne: "7 NM", 
    choiceTwo: "8 NM", 
    choiceThree: "5 NM", 
    choiceFour: "9 NM", 
    answer: "5 NM", 
  }
];
var questionIndex, userScore, userTimer, timerMoving; 

function startQuiz() {
  console.log("startingQuiz"); 
  startScreen.style.display="none" 
  quizScreen.style.display="block"

  questionIndex = 0; 
  userScore= 0; 
  userTimer= 60; 
  startTimer(); 
  displayQuestion();
}
function startTimer() { 
timerMoving = setInterval(countDown, 1000)
} 
function countDown() {  
  console.log(userTimer)
  userTimer-- 
  timer.textContent=userTimer 
  if(userTimer<=0) { 
    endGame()
  }
}
function displayQuestion() {
  question.textContent = questions[questionIndex].question;
  choiceOne.textContent = questions[questionIndex].choiceOne 
  choiceTwo.textContent = questions[questionIndex].choiceTwo 
  choiceThree.textContent = questions[questionIndex].choiceThree 
   

  choiceFour.textContent = questions[questionIndex].choiceFour 
} 
function checkAnswer(e) { 
    console.log(e) 
    if(e.target.matches("button")) { 
        console.log("I clicked the button") 
        if(e.target.textContent===questions[questionIndex].answer) { 
            console.log("I clicked the right answer") 

            userScore+=5 
        } else { 
          console.log("I clicked the wrong answer")
        }
        questionIndex++ 
        if(questionIndex>=questions.length) { 
          endGame()
        } else { 
          displayQuestion()
        }
        
    }

} 
function endGame(){  
 clearInterval(timerMoving)
  console.log(initialScreen)
  initialScreen.style.display="block" 
  quizScreen.style.display="none"
  currentScore.textContent = userScore
}

startButton.addEventListener("click", startQuiz); 
quizScreen.addEventListener("click", checkAnswer); 

