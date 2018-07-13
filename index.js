/*

This is my interpretation of the feedback section in the Review Checklist
-------------------------------------------------------------------------
Done - 1. Clean up HTML, talk with mentor about best practices.

Done - 2. Remove certain lists?  
    Done - a. I removed the HTML list from the page heading.  
    b. I do not know what other list needs to be removed.

Done - 3. Check colors at https://contrastchecker.com for:
    Done - a. black on blue.
    Done - b. yellow and green on start button.

Done - 4.  Refactor initHTML so more html is in the index.html file.

5. In the 'initHTML' function, loop the html answer section to reduce code.

I can easily do a loop here by splitting the HTML, using a 'for' looping with an 
enclosed 'switch' statement as I did in the function 'updateAnswerList'.  
This 'initHTML' function is only called one time, to initialize the HTML, 
no matter how many times the quiz is restarted.  So really if I loop here 
it would result in a lot more code and not less.  An alternative would be to 
simply put all the HTML from this function in the index.html file and remove 
this function.  I am new to JQuery and HTML so please, if I am wrong please 
clarify.

Done - 6. Refactor updateAnswerLIst with a loop.

Done - 7. The html form fieldset needs a legend.

*/

/*============================*/
/* Initialize HTML to the DOM */

function initHTML(STORE, questionNumber) {
  let response = '';
  let score = 0;
  let totalQuestions = 0;
  let questionList = '';

  questionList =  `<div class="quizQuestions">
    <h2 class="heading">${STORE[questionNumber].question}</h2>
    <form id="quizForm">
      <fieldset>
        <legend>Multiple Choice</legend>
        <label class="answerOption">
          <input id="one" type="radio" value="${STORE[questionNumber].answers[0]}" 
            name="answer" autofocus checked required>
          <span class="answerOne">${STORE[questionNumber].answers[0]}</span>
        </label>
        <label class="answerOption">
          <input id="two" type="radio" value="${STORE[questionNumber].answers[1]}" 
            name="answer" required>
          <span class="answerTwo">${STORE[questionNumber].answers[1]}</span>
        </label>
        <label class="answerOption">
          <input id="three" type="radio" value="${STORE[questionNumber].answers[2]}" 
            name="answer" required>
          <span class="answerThree">${STORE[questionNumber].answers[2]}</span>
        </label>
        <label class="answerOption">
          <input id="four" type="radio" value="${STORE[questionNumber].answers[3]}" 
            name="answer" required>
          <span class="answerFour">${STORE[questionNumber].answers[3]}</span>
        </label>
        <button type="submit" class="submitButton">Submit</button>
      </fieldset>
    </form>
    </div>
    <div class="correctFeedback">
      <p class="answerResponse"><b>${response}</b></p>
        <div class="icon">
          <img id="dispPic" src="${STORE[questionNumber].icon}" 
            alt="${STORE[questionNumber].alt}"/>
        </div>
        <div>
          <span class="addInfo">"${STORE[questionNumber].additionalAnswer}"</span>
        </div>
      <button type=button class="nextButton" >Next</button>
    </div>`;

    return questionList;
}

/*======================================*/
/* Inits Quiz and processes first event */

function initQuiz(STORE, questionNumber, totalQuestions) {
  let score = 0;
  let questionNumberDisp = questionNumber + 1;

  $('.questionAnswerForm').html(initHTML(STORE, questionNumber));
    $('.quizStart').on('click', '.startButton', function (event) {

      $('.quizStart').remove();
      updateAnswerList(STORE, questionNumber, totalQuestions, questionNumberDisp, score);
      $('.quizQuestions').css('display', 'block');
    }
  );
}

/*=======================================================*/
/*Main function displays question window an related stats*/

function processQuestions(STORE, questionNumber, totalQuestions, score) {
  let questionNumberDisp = questionNumber + 1;

  // Submit quiz info and display Quiz question list
  $('form').on('submit', function (event) {
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;

    event.preventDefault();

    $('#quizForm').trigger("reset");
    $('.quizQuestions').css('display', 'none');
    $('.correctFeedback').css('display','block');

    $('#dispPic').attr('src',`${STORE[questionNumber].icon}`);
    $('#dispPic').attr('alt', `${STORE[questionNumber].alt}`);

    $('.addInfo').text(`${STORE[questionNumber].additionalAnswer}`);

    if (answer === correctAnswer) {
      $('.answerResponse').text("Correct!");
      score ++;
      $('.score').text(score);
    } else {
      $('.answerResponse').text("That's Incorrect!");
    }

    ++questionNumber;
    questionNumberDisp = questionNumber + 1;
  });


  /*===========================*/
  /* Event to do Answer Screen */

  $('.correctFeedback').on('click', '.nextButton', function (event) {
    $('.correctFeedback').css('display', 'none');

    // If true go to final screen
    if(questionNumber == totalQuestions) {
      $('.quizQuestions').css('display', 'none');

      configEndScreen(score, totalQuestions);
      $('.results').css('display', 'block'); 

      score = 0;
      questionNumber = 0;
    } else {
      $('.quizQuestions').css('display', 'block');

      updateAnswerList(STORE, questionNumber, totalQuestions, questionNumberDisp, score);
    }

    $("one").focus();
    $('input[name="one"').prop('checked',true);
  });

  questionNumber = endingScreen(STORE, questionNumber, totalQuestions, score);
}

/*=================================================*/
/* Show correct end quiz screen and restart option */

function endingScreen(STORE, questionNumber, totalQuestions, score) {
  $('.results').on('click', '.restartButton', function (event) {
    let questionNumberDisp = 1;

    updateAnswerList(STORE, questionNumber, totalQuestions, questionNumberDisp, score);

    $('.results').css('display', 'none');
    $('.quizQuestions').css('display', 'block');      
  });

  return questionNumber;
}

/* ======================================*/
/* Push Array data to HTML question list and update headings*/

function updateAnswerList(STORE, questionNumber, totalQuestions, questionNumberDisp, score) {
  let label = '.answerOne';
  let eyeDee = '#one';
  let answerNum = 0;

  if(questionNumberDisp == 16) {
    questionNumberDisp = totalQuestions;
  }

  $('.questionNumber').text(questionNumberDisp);
  $('.total').text(totalQuestions);

  $('.score').text(score);

  $('.heading').text(`${STORE[questionNumber].question}`);

  for(answerNum = 0; answerNum < 4; ++answerNum) {
    switch(answerNum) {
      case 0:
        label = '.answerOne';
        eyeDee = '#one';
        break;
      case 1:
        label = '.answerTwo';
        eyeDee = '#two';
        break;
      case 2:
        label = '.answerThree';
        eyeDee = '#three';
        break;
      case 3:
        label = '.answerFour';
        eyeDee = '#four';
        break;      
    }
    $(label).text(`${STORE[questionNumber].answers[answerNum]}`);
    $(eyeDee).val(`${STORE[questionNumber].answers[answerNum]}`);
  }
}

/*==================================*/
/* Setup and configure final screen */

function configEndScreen(score, totalQuestions) {
  let endingStatement = '';
  let endScoreTxt = 'You scored ' + score + ' out of ' + totalQuestions;

  if (score >= 12) {
    endingStatement = 'Nice job.';
    comment = 'You did well on the quiz.';
  } else if (score < 12 && score >= 7) {
    endingStatement = 'Fairly good, though a few animals may die.';
    comment = 'Learn more about farming but you are almost there.';
  } else {
    endingStatement = 'Your knowledge is not quite good enough to farm yet.';
    comment = 'Do more research before you start a farm.';
  }
  $('.endHeading').text(`${endingStatement}`);
  $('.endScore').text(`${endScoreTxt}`);
  $('.endComment').text(`${comment}`);
}

/*===============*/
/* Main Function */

function quiz() {
  let questionNumber = 0;
  let score = 0;
  let totalQuestions = 0;

  const STORE = getDataArray();

  totalQuestions = STORE.length;

  initQuiz(STORE, questionNumber, totalQuestions);

  processQuestions(STORE, questionNumber, totalQuestions, score);
}

$(quiz);