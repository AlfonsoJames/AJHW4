// var timer = setInterval(function() {}
// var start = function() {
//     console.log("start")
// }
var questions = [q1,q2,q3,q4,q5];
var q1a =[a1,a2,a3]
var q2a =[a1,a2,a3]
var q3a =[a1,a2,a3]
var q4a =[a1,a2,a3]
var q5a =[a1,a2,a3]
var p

function start() {
    var home = $(document.createElement("p"));
    $ ("<p>").html("Click Button below to Start Quiz");
    var instruct = document.getElementById("question");
    question.appendChild(home);

    var button = document.createElement("button");
    button.innerHTML = "Start Quiz";
    var ul = document.getElementsByTagName("ul")[0];
    ul.appendChild(button);

    console.log("Quiz Ready")
    button.addEventListener ("click", function() {
        q1();
        console.log("Start Timer")
    });
}
function q1() {
    console.log("q1");
    $.each( q1a, function( key, value ) {
        sum += value;
    });
     
    console.log( sum );
   


}
