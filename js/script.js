// BUSINESS LOGIC

var cookie_responses = [];
var omen_responses = [];
var guilty_responses = [];

var answer = function () {
  if (cookie_responses.length >= 2) {
    alert("don't be greedy, just pick one.");
  } else if (guilty_responses.length <=2) {
    alert("come on now, you know you have more guilty pleasures...");
  } else if (omen_responses.length >= 3) {
    alert("you're NOT a lucky person...and get lost, ahhhhhh, we're scared");
  } else if (guilty_responses.includes("katy", "mcd")) {
    alert("does she melt your popsicle?");
  }
};





// USER LOGIC

$(document).ready(function() {
  $("form#fortunes").submit(function(event) {
    event.preventDefault();

    $("#fortune_teller").fadeIn();

    $("input:checkbox[name=fortune_cookie]:checked").each(function(){
      var cookie = $(this).val();
      cookie_responses.push(cookie);
    });

    $("input:checkbox[name=bad_omen]:checked").each(function(){
      var omen = $(this).val();
      omen_responses.push(omen);
    });

    $("input:checkbox[name=guilty]:checked").each(function(){
      var guilt = $(this).val();
      guilty_responses.push(guilt);
    });

    answer();

    cookie_responses = [];
    omen_responses = [];
    guilty_responses = [];
  });



});
