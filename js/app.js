$(document).ready(function(){

var randNum;
var inputNum;
var feedBackMsg;
var guess = parseInt($('#count').text());

/*--- Display information modal box ---*/
   $(".what").click(function(){
     $(".overlay").fadeIn(1000);

   });

   /*--- Hide information modal box ---*/
   $("a.close").click(function(){
   $(".overlay").fadeOut(1000);
   });


function guessNumber(){
var genNum;
genNum = Math.floor((Math.random() * 100) + 1);
return genNum;
}

randNum = guessNumber();

//alert(randNum);
/*
$('#userGuess').keyup(function(e){
var key = e.keyCode
if(key === 13) {
alert("key up!");
event.preventDefault();
compareNumber(randNum);
};
}); */

$('#guessButton').click(function(){
//alert("Button Click");
compareNumber(randNum);
});

$('.new').click(function(){
location.reload();
});

function compareNumber(num){
inputNum = $('#userGuess').val();
//alert('Comparing numbers');
var playAgain = true;

numFormatValidation(inputNum);

if(numValueValidation(inputNum)){

if(inputNum < num){
$('#guessList').append('<li class="cold">'+inputNum+'</li>');
//$('#guessList').append('Cold');
feedBackMsg = 'Cold!!';
feedBackUpdate(feedBackMsg);
counter();


}else if(inputNum > num){
$('#guessList').append('<li class="hot">'+inputNum+'<li>');
//$('#guessList').append('Hot');
feedBackMsg = 'Hot!!';
feedBackUpdate(feedBackMsg);
counter();	

} else if (inputNum == num){
//alert('Got It!!!');
feedBackMsg = 'Got It!!!';
feedBackUpdate(feedBackMsg);
do{
playAgain = confirm("Would like to play again");

if(playAgain === true){
playAgain = false;
location.reload();

}else{
playAgain = false;
$('#userGuess').prop('disabled', true);
$('#guessButton').prop('disabled', true);
}
} while(playAgain);
}

$('#userGuess').val("");
$('#userGuess').empty();	

}

}

function numFormatValidation(input){

if(isNaN(input)){
//alert(input + ' is not a number\nPlease enter a valid number');
//$('#feedback').text("");
//$('#feedback').append(input + ' is not a valid number <br> Please enter a valid number');
feedBackMsg = '<span id="nonDigit">'+input + '</span> is not a valid number <br> Please enter a valid number';
feedBackUpdate(feedBackMsg);
$('#userGuess').val("");
$('#userGuess').empty();
} else{
return input;
}	
}

function numValueValidation(input){

if(input < 1 || input > 100){
//alert('Please enter a number between 1 and 100');
//$('#feedback').text("");
//$('#feedback').append('Please enter a number between <br> 1 and 100');
feedBackMsg = 'Please enter a number between <br> 1 and 100';
feedBackUpdate(feedBackMsg);
$('#userGuess').val("");
$('#userGuess').empty();
return false;
} else{
return true;
}	
}

function counter(){
$('#count').text("");
$('#count').append(++guess);
}

function feedBackUpdate(msg){
$('#feedback').text("");
$('#feedback').append(msg);
}

});