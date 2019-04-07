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
    console.log(randomNumber);

    console.log(redCrystalNumber);
    console.log(blueCrystalNumber);

    console.log(yellowCrystalNumber);

    console.log(greenCrystalNumber);


    $("#randomNumber").html(randomNumber);
    
    function scoreCheck() {
    
         console.log("your score is:"+scoreCounter);
        //  console.log("random number is:"+randomNumber);
        if (scoreCounter==randomNumber) {
            win++;
            $("#win").html("Wins:" + win);
            console.log("equal,you won!");
            randomNumberGenerator();
            $("#randomNumber").html(randomNumber);
            console.log(scoreCounter);
             $("#scoreCounter").html(scoreCounter);
        
        }
        else {
            if (scoreCounter > randomNumber) {
                loss++;
                $("#loss").html("Losses:"+ loss);
                console.log("You loss"+ loss);
                randomNumberGenerator();
                $("#randomNumber").html(randomNumber);
                console.log(scoreCounter);

                 $("#scoreCounter").html(scoreCounter);




        
            }
        }
    };
    $("#redCrystal").click(function () {
        console.log("redclick:"+redCrystalNumber);
        console.log(scoreCounter);
        scoreCounter += redCrystalNumber;
        console.log("score" + scoreCounter);
        $("#scoreCounter").text(scoreCounter);
        scoreCheck(scoreCounter);



    });
    $("#blueCrystal").click(function () {
        console.log("blueclick:"+blueCrystalNumber);
        scoreCounter += blueCrystalNumber;
        console.log("score" + scoreCounter);
        $("#scoreCounter").html(scoreCounter);
        scoreCheck(scoreCounter);
        console.log("calling");

    });

    $("#greenCrystal").click(function () {
        console.log("greenclick:"+ greenCrystalNumber);
        scoreCounter += greenCrystalNumber;
        console.log("score" + scoreCounter);
        $("#scoreCounter").html(scoreCounter);
        scoreCheck(scoreCounter);
        console.log("calling");




    });

    $("#yellowCrystal").click(function () {

        console.log("yellowclick:"+yellowCrystalNumber);
        scoreCounter += yellowCrystalNumber;
        console.log("score" + scoreCounter);
        $("#scoreCounter").html(scoreCounter);
        scoreCheck(scoreCounter);
        console.log("calling");




    });



    // $.fn.scoreCount = function(crystalNumber){ 
    //     $("#scoreCounter").text(crystalNumber);
    //     scoreCounter+=crystalNumber;
    //     console.log(scoreCounter);
    // // }
    // scoreCount();

}
);


