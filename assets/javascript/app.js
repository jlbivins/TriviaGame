var card = $("#random-question");

  // var random_question=[];
  // var random_answer=[];
  // var random_index=0;

var trivia = [{
    question: 'Who was the running back for the Cowboys 1977-1988, referred to as TD?',
    answers: ['Tony Davison','Tony Dorsett','Thomas Dimetroff','Tommy Dee'],
    correctAnswer: 'Tony Dorsett'
  }, {
    question: 'This quarterback has won 6 Super Bown titles?',
    answers: [ 'JJ Watt','Tom Brady','Nick Foles','Derrick Carr'],
    correctAnswer: 'Tom Brady'
    }, {
    question: 'Of the following, which NFL team has won the most Super Bowl titles?',
    answers: ['Dallas Cowboys','Kansas City Chiefs', 'New England Patriots','Green Bay Packers'],
    correctAnswer: 'New England Patriots'
    }, {
    question: 'Which college basketball coach has coached and won the most gold metals for USA Mens Basketball?',
    answers: [ 'Jim Boeheim','Mike Krzyzewski','Rick Pitino','Bob Knight'],
    correctAnswer: 'Mike Krzyzewski'
    }, {
    question: 'In football, what is the nickname of the defensive football position, who lines up opposite of the offensive center',
    answers: ['Nickel Back','Nose Tackle','Monster Man','Tail Back'],
    correctAnswer: 'Nose Tackle'

}];


var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < trivia.length; i++) {
      card.append("<h2>" + trivia[i].question + "</h2>");
      for (var j = 0; j < trivia[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + trivia[i].answers[j] + "''>" + trivia[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === trivia[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});

 
   
 // </script>