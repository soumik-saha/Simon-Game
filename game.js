var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).faceIn(100);
    var audio = new Audio("sounds/"+randomChosenColor+".mp3");
    audio.play();
}
