/*array for the questions in the quiz, which are images*/
var questionsHeuristics = ['images/visibility.png', 
                           'images/world.png', 
                           'images/control.png', 
                           'images/consistency.png', 
                           'images/prevention.png', 
                           'images/recall.png', 
                           'images/flexibility.png', 
                           'images/aesthetic.png', 
                           'images/recover.png', 
                           'images/help.png' ];

/*the answer array to the corresponding questions*/
var answersHeuristics = ['Visibility of System Status', 
                         'Match With Real World', 
                         'User Control & Freedom', 
                         'Consistency & Standards', 
                         'Error Prevention', 
                         'Recognition Instead of Recall', 
                         'Flexibility & Efficiency of Use', 
                         'Aesthetic & Minimalist Design', 
                         'Diagnose & Recover from Errors',
                         'Help and Documentation'];

/*array for option choice A, they are random*/
var answerChoicesA = ['User Control & Freedom',
                     'Error Prevention', 
                     'Help and Documentation',
                     'Consistency & Standards',
                     'Aesthetic & Minimalist Design', 
                     'Diagnose & Recover from Errors',
                     'Help and Documentation',
                     'Aesthetic & Minimalist Design',
                     'Visibility of System Status',
                     'Error Prevention'];

/*array for option choice B, they are random*/
var answerChoicesB = ['Match With Real World',
                     'User Control & Freedom', 
                     'User Control & Freedom',
                     'Aesthetic & Minimalist Design', 
                     'Recognition Instead of Recall',
                     'Help and Documentation',
                     'Flexibility & Efficiency of Use', 
                     'Visibility of System Status',
                     'Aesthetic & Minimalist Design',
                     'Recognition Instead of Recall'];

/*array for option choice C, they are random*/
var answerChoicesC = ['Visibility of System Status',
                     'Consistency & Standards', 
                     'Flexibility & Efficiency of Use', 
                     'Diagnose & Recover from Errors',
                     'Visibility of System Status', 
                     'Recognition Instead of Recall',
                     'User Control & Freedom',
                     'Error Prevention',
                     'Diagnose & Recover from Errors',
                     'Visibility of System Status' ];

/*array for option choice D, they are random*/
var answerChoicesD = ['Consistency & Standards', 
                     'Match With Real World', 
                     'Recognition Instead of Recall',
                     'Flexibility & Efficiency of Use',
                     'Error Prevention', 
                     'Match With Real World', 
                     'Consistency & Standards',
                     'Diagnose & Recover from Errors',
                     'Match With Real World', 
                     'Help and Documentation'];


/*variables*/
var asked = [];
var randomHeuristic;
var score;
var gameCounter; 

/* I wanted the user to be able to have instructions if they needed it, so I created a button for the user to see the instructions. This button is shown on the start game page and does not carry through the rest of the game. The user can press the button for the instructions text and then press it again for it to hide.*/
function showInstructionsText() {
    if (instructionsText.className == "hidden" )
         {
     instructionsText.className = "show";
  } 
    else {
    instructionsText.className = "hidden";
  }
}

/*This function corresponds to the Start Game button. Here everything is reset, meaning that everything is set to 0. The button after being pressed is hidden, as it will not be needed for the rest of the game*/
function startGame() {
 /*This is the play again button and it is hidden*/         
            play.className = "hidden";

    for (i=0; i<questionsHeuristics.length; i++){
        asked[i] = 'no';
    }
    score = 0;
    gameCounter = 0;
    output.innerHTML = '';
    currentScore.innerHTML = '';
    
/*This hides the start game button after the user presses it, so they are transported to the actual questions */
    start.className = 'hidden';
    gameBox.className = 'show';
/*This hides the instructions button after the user presses the start game button, so they are transported to the actual questions */
    instructions.className = "hidden";
/*This causes the askQuestion function to start*/
    askQuestion();
}

/*This function corresponds to the final score, as I needed to put boundary cases in to prevent the user from constantly getting points, even after the game has finished */
function askQuestion(){
    output.innerHTML='';
    if (gameCounter==questionsHeuristics.length){
        
/* This disables the user from gaining anymore points after the game has finished*/
        choice1.disabled = true;
        choice2.disabled = true;
        choice3.disabled = true;
        choice4.disabled = true;
        currentScore.innerHTML = 'Final Score :' +score;
        
/* If the score is more than 7, this message will be displayed */
        if (score==questionsHeuristics.length){
            output.innerHTML ='Wow! You got a perfect score! You are well prepared for the exam. Dont worry and relax! For quick revision, check out this website: <a href="https://www.nngroup.com/articles/ten-usability-heuristics/"> Usability Heuristics and Meanings </a>';
    }

  /* If the score is equal to 7, this message will be displayed */      
        else if (score>=7){
             output.innerHTML = 'You know your heuristics pretty well, try for a perfect score next time! You will be ready for the exams in no time! For quick revision, check out this website: <a href="https://www.nngroup.com/articles/ten-usability-heuristics/"> Usability Heuristics and Meanings </a>';
   }

  /* If the score is less than 7, this message will be displayed */ 
        else {  
             output.innerHTML = 'Try again. You need to brush up on your skills. You will get there in no time. For quick revision, check out this website: <a href="https://www.nngroup.com/articles/ten-usability-heuristics/"> Usability Heuristics and Meanings </a>';
             

    }

 /*This is the play again button*/         
            play.className = "show"
        
}

    else {
        randomHeuristic = Math.floor(Math.random()*questionsHeuristics.length);
        
    if (asked[randomHeuristic]=='yes'){
        askQuestion();
    }
        
/* This code is used to change each answer choice array from the random heuristic */   
    else {
        heuristicImg.src = questionsHeuristics[randomHeuristic];
        asked[randomHeuristic] = 'yes';
        choice1.value = answerChoicesA[randomHeuristic];
        choice2.value = answerChoicesB[randomHeuristic];
        choice3.value = answerChoicesC[randomHeuristic];
        choice4.value = answerChoicesD[randomHeuristic];
        gameCounter++;
        choice1.disabled = false;
        choice2.disabled = false;
        choice3.disabled = false;
        choice4.disabled = false;
    }

   }
    
}

function checkAnswer(buttonValue){
    
    var answer = buttonValue;
    choice1.disabled = true;
    choice2.disabled = true;
    choice3.disabled = true;
    choice4.disabled = true;
    
    if (answer == answersHeuristics[randomHeuristic]){
        score++;
        output.innerHTML = 'Well done, '+answer+' is correct!'
        output.style.color = '#008000';
        
    }
/* This if statement is to represent the message that you choose the correct answer */
    
    else {
        output.innerHTML= 'Sorry, '+answer+' is not correct. Try again.';
        output.style.color = '#FF0000';
    }
/* This if statement is to represent the message that you choose the incorrect answer */
    
    currentScore.innerHTML = 'Current Score: '+score;
/* This will cause the current score to be displayed */
    
    setTimeout(askQuestion, 2000);
    /* This is how long until the next question is displayed */

}




