//<script type="text/javascript">

  var random_question=[];
  var random_answer=[];
  var random_index=0;

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

//1.click on start button display questions, and display timer (starts)
//2.when time runs out or they hit the i am finished button , we want to grade the quesitons
// 
//3.then correct question is answered
//4. when you grade questions:
//5. display questions
var countdown=100;


$("#random-button").on("click", function() {
  var ques;
  $("#random-button").hide();
 var answer = $("input[name=q" + i + "]:checked").val();
  console.log('answer is: '+ answer);
  for(var i=0;i<trivia.length;i++){
    ques=trivia[i];                             //loop thru questions display questions
    console.log(ques);
    var new_h2=$("<h2>");  
    new_h2.html(ques.question);
    $("#random-question").append(new_h2);

    for(var j=0;j<ques.answers.length;j++){
       var ans='<input type="radio" name="q' +i+ ' "value="'+ques.answers[j]+'">'+ques.answers[j];
       console.log(ans);
    $("#random-question").append(ans);
    

    } // 2nd end-for 
 

  
  
  } // 1st end-for

//****************************************
//If 'trivia' is our original array of question objects
var misses=0;
var correct=0;
var incorrect=0;
for(var i = 0; i < trivia.length; i++){

// // anwswer will contain the value of the checked input 
// // or 'undefined' if no input is selected    
ans = $("input[type='radio'][name=q" + i + "]:checked").val();  //contrary to google, i couldn't get this to work
                                                                //so i implemented the logic alternatively on line 120
console.log('answer is: '+ ans);
	
//***************************************


    } //end-for
});

$(document).on('click','input',function(){
 
 var correct=0 
 var incorrect=0;
  userAns =  $(this).attr('value')
  var index =  $(this).attr('name').replace('q', '')
  console.log(index)
  if(userAns === trivia[parseInt(index)].correctAnswer){
    correct++;    
  } 
  else{
     incorrect++;
  } 

  //missing is logic for scoring the users responses as determined from the if-else condition above
  //also missing is the timing functionality which gives the user a certain amount of time to answer
  console.log('correct'+correct);
  console.log('incorrect'+incorrect);
  
})


 
   
 // </script>