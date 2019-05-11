$(document).ready(function () {
    var randomNumber;
    var redCrystalNumber;
    var yellowCrystalNumber;
    var blueCrystalNumber;
    var greenCrystalNumber;
    var scoreCounter = 0;
    var win = 0;
    var loss = 0;


    function randomNumberGenerator(){

    
     randomNumber = Math.floor((Math.random() * 120) + 19);
     redCrystalNumber=Math.floor((Math.random() * 12) + 1);
     blueCrystalNumber=Math.floor((Math.random() * 12) + 1);
     yellowCrystalNumber=Math.floor((Math.random() * 12) + 1);
     greenCrystalNumber=Math.floor((Math.random() * 12) + 1);
     scoreCounter=0;
    
    }
    randomNumberGenerator();
    $("#randomNumber").html(randomNumber);
    
    function scoreCheck() {
    
        if (scoreCounter==randomNumber) {
            win++;
            $("#win").html("Wins:" + win);
            randomNumberGenerator();
            $("#randomNumber").html(randomNumber);
             $("#scoreCounter").html(scoreCounter);
        
        }
        else {
            if (scoreCounter > randomNumber) {
                loss++;
                $("#loss").html("Losses:"+ loss);
                randomNumberGenerator();
                $("#randomNumber").html(randomNumber);
                 $("#scoreCounter").html(scoreCounter);




        
            }
        }
    };
    $("#redCrystal").click(function () {
        scoreCounter += redCrystalNumber;
        $("#scoreCounter").text(scoreCounter);
        scoreCheck(scoreCounter);



    });
    $("#blueCrystal").click(function () {
        scoreCounter += blueCrystalNumber;
        $("#scoreCounter").html(scoreCounter);
        scoreCheck(scoreCounter);

    });

    $("#greenCrystal").click(function () {
        scoreCounter += greenCrystalNumber;
        $("#scoreCounter").html(scoreCounter);
        scoreCheck(scoreCounter);
    });

    $("#yellowCrystal").click(function () {

        scoreCounter += yellowCrystalNumber;
        $("#scoreCounter").html(scoreCounter);
        scoreCheck(scoreCounter);




    });
}
);


