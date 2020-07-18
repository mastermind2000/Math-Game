var playing = false;
var scoreval;
var tr;
var correctAnswer;
document.getElementById("startreset").onclick =function(){
    if(playing == true){
        location.reload();
    }
    else{
        playing = true;
         scoreval = 0;
        document.getElementById("score").innerHTML = scoreval;
        show("timeremaining");
        tr = 60;
        document.getElementById("trvalue").innerHTML = tr;
        hide("gameover");
        document.getElementById("startreset").innerHTML = "Reset Game";    
        startCountDown();
        generateQA();
    }
}
for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
        if(playing==true){
            if(this.innerHTML == correctAnswer){
                scoreval++;
                document.getElementById("score").innerHTML = scoreval;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                },1000);
                generateQA();
            }
            else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },1000);
            }
        }
    }
}
function startCountDown(){
    action = setInterval(function(){
        tr-=1;
        document.getElementById("trvalue").innerHTML = tr;
        if(tr == 0){
            stopCountDown();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game over!</p><p>Your score is " + scoreval + ".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    },1000);
}
function stopCountDown(){
    clearInterval(action);
}
function hide(Id){
    document.getElementById(Id).style.display = "none";
}
function show(Id){
    document.getElementById(Id).style.display = "block";
}
function generateQA(){
    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "X" + y;
    var position = 1 +  Math.round(3*Math.random());
    document.getElementById("box"+position).innerHTML = correctAnswer;
    var answers = [correctAnswer];
    for(i=1; i<5; i++){
        if(i != position) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}
