
//questions
//answers
//checker
// highscores : score, initials
    //compare score values w/in array/object? somehow
var rightAnswer;
var wrongAnswer;

// var quizScoring = {
//     right: 0,
//     wrong: 0,
// }

//start()
//interval timer, decrements on wrong answer
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (rightAnswer === true && timerCount > 0) {
            rightAnswer++;
        } else if (rightAnswer === false && timerCount > 0) {
            wrongAnswer++
            timerCount--;
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        console.log("time's up")
      }
    }, 1000);
  }
//quiz ends when all questions are answered OR the timer gets to 0.
    //set elements to question & answers 
    //submit button
    //get input & compare to correct answer
    //save changes/answers function (updating score)
    //reset question &or set elements to new question 

//local storage: score+initials (save at end)

