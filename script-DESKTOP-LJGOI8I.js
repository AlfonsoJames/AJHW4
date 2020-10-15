// var timer = setInterval(function() {}
// var start = function() {
//     console.log("start")
// }
var questions = [q1];

var q2a =[a1,a2,a3]
var q3a =[a1,a2,a3]
var q4a =[a1,a2,a3]
var q5a =[a1,a2,a3]
var p

function start() {
    // var p = $(document.createElement("p"));
    // $ ("p").html("Click Button below to Start Quiz");
    // document.getElementById("question").appendChild("p");


    var button = document.createElement("button");
    $ ("button").html("Start Quiz");
    var ul = document.getElementsByTagName("ul")[0];
    ul.appendChild(button);

    console.log("Quiz Ready")
    button.addEventListener ("click", function() {
        q1();
        console.log("Start Timer")
    });
}


function q1() {
    
    var q1a =[a1,a2,a3]
    console.log("q1");
    $.each( q1a, function( key, value ) {
        
        document.createElement("button");
        button.innerHTML(q1a);
        var ul = document.getElementsByTagName("ul");
        ul.appendChild(button);
        

    });
}
    // console.log( sum );
   



