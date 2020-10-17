function start() {
  
    $("#question").html("Click Button below to Start Quiz");

    var button = $("<button>");
    $(button).html("Start Quiz");
    var ul = $("#buttons");
    $ (ul).append(button)

    console.log("Quiz Ready");
// Above creates intial "Start Quiz" html
// Below starts w/ question 1 starts global timer and sets 1st of conditions to end and prompt for name
    $(button).click(function(){
        $("#buttons").empty();
        q1();
        // $("#question").empty();
        console.log("Start Timer");     
            var timeleft = 4;
            var timer = setInterval(function(){
            timeleft--;
            document.getElementById("countdowntimer").textContent = "Timer: " + timeleft;
            if (timeleft < 0) {
                alert("TIME EXPIRED!");
                prompt("Please Enter Your Name");
                clearInterval(timer);
            } 
        },1000);
            
    });
}

// Generate contents of question 1 
    
    console.log("q1");

    var answers =[
        "The Close answer",
        "The completely wrong answer",
        "The misleading wrong answer"];

    $("#question").html("What is the answer to the first Question?");
    
    answers.forEach(function(answer) {
        var button = $("<button>");
        $(button).html(answer);   
        var ul = $("#buttons");
        $ (ul).append(button);
        var correct = $("#correct");
    });
    // now I cant figure out how to separte the correct answer from the wrong answer:()
    

 