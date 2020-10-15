function start() {
  
    $("#question").html("Click Button below to Start Quiz");

    var button = $("<button>");
    $(button).html("Start Quiz");
    var ul = $("#buttons");
    $ (ul).append(button)

    console.log("Quiz Ready");

    $(button).click(function(){
        q1();
        console.log("Start Timer");
    
        var timeleft = 31;
        var timer = setInterval(function(){
        timeleft--;
        document.getElementById("countdowntimer").textContent = "Timer: " + timeleft;
        if (timeleft <= 0) {
            clearInterval(timer);
            alert("TIME EXPIRED!");
            prompt("Please Enter Your Name");
         
        }},1000);
        
            
        })
 
function q1() {
    
    console.log("q1");

    var answers =[
        "The Correct answer",
        "The completely wrong answer",
        "The misleading wrong answer"];

    $("#buttons").empty();
    $("#question").empty();
    $("#question").html("What is the answer to the first Question?");

    var a1 = function() {
        
        var button = $("<li>");
        $(button).html();
        var ul = $("#ul");
        $ (ul).append(button)
        console.log("added button");
    }
    answers.forEach(a1);
}
}
