// BUSINESS LOGIC

var cookie_responses = [];
var omen_responses = [];
var guilty_responses = [];

var results;
var trump = "Trump is president, and now we're all fucked.";
var hillary = "Ms. Rodham wins...we're all stagnant for four more years."
var fucked = "Well, you have shitty luck, don't worry about the US president."

var answer = function () {
  if (cookie_responses.length >= 2) {
    alert("don't be greedy, just pick one.");
  } else if (guilty_responses.length <=2) {
    alert("come on now, you know you have more guilty pleasures...");
  } else if (omen_responses.length >= 3) {
    alert("you're NOT a lucky person...and get lost, ahhhhhh, we're scared");
  } else if ((guilty_responses.includes("katy")) ||
              (guilty_responses.includes("mcd")) || (guilty_responses.includes("weed"))) {

    if ((cookie_responses.includes("family")) || (cookie_responses.includes("matrix")) ) {
      if ((omen_responses.includes("milk")) || (omen_responses.includes("dino"))) {
      return results = trump;
      } else {
        alert("you have no future, TRY AGAIN!!")
      }
    } else if ((cookie_responses.includes("lottery")) ||
               (cookie_responses.includes("trip")) ||
               (cookie_responses.includes("space"))) {

      if (omen_responses.includes("none")) {
        return results = fucked;
      } else if ((omen_responses.includes("cat")) || (omen_responses.includes("ladder"))) {
        return results = hillary;
      } else {
        alert("you have no future, TRY AGAIN!!")
      }
    } else {
      alert("you have no future, TRY AGAIN!!")
    }
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

    $("#fortune_teller").append(results);

    cookie_responses = [];
    omen_responses = [];
    guilty_responses = [];
  });



});
