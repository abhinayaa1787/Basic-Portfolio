$(document).ready(function () {
    var intervalID;
    $("#btn").on("click", function () {

        // console.log("calling");
        var audioArray = ["../assets/images/correctanswer.mp3", "../assets/images/wronganswer.mp3"];
        var quesArr = [
            {
                ques: "DAVID JUNG is considered by many to be the originator of what famous food",
                opt1: "Ramen Noodles",
                opt2: "Fortune Cookies",
                opt3: "Fried Rice",
                opt4: "Spring Rolls",
                ans: "Fortune Cookies",
                image: "../assets/images/fortune-cookie.gif"
            },
            {
                ques: "What is the proper title of a person who makes pizzas in a pizzeria?",
                opt1: "Guv'nor",
                opt2: "Pizzazzy",
                opt3: "Pizzaiolo",
                opt4: "Chef de Cuisine",
                ans: "Pizzaiolo",
                image: "../assets/images/pizzaiolo.webp"
            },
            {
                ques: "What is the scale that measures the heat of a chili pepper?",
                opt1: "Scoville Scale",
                opt2: "Richter Scale",
                opt3: "Saffir-Simpson Scale",
                opt4: "Beaufort Scale",
                ans: "Scoville Scale",
                image: "../assets/images/pepper.gif"

            },
            {
                ques: "What country does the word mocha come from?",
                opt1: "Pakistan",
                opt2: "Yemen",
                opt3: "Saudi Arabia",
                opt4: "Tonga",
                ans: "Yemen",
                image: "../assets/images/mocha.gif"


            },
            {
                ques:"What fast food restaurant is credited with introducing the first modern-day drive-thru window?",
                opt1: "McDonald's",
                opt2: "Wendy's",
                opt3: "Burger King",
                opt4: "Chick-Fil-A",
                ans: "Wendy's",
                image: "../assets/images/wendys.webp"
            },
            {
            ques:"Mr. Pibb was a soft drink created by the Coca-Cola Company to compete with what other soft drink?",
            opt1:"Mt.Dew",
            opt2:"Sprite",
            opt3:"Dr.Pepper",
            opt4:"Pepsi",
            ans:"Dr.Pepper",
            image: "../assets/images/drpepper.webp"
            }



        ];
        var correctAnswer = 0;
        var wrongAnswer = 0;
        var unanswered=0;
        var i = 0;
        function endPage() {
            $("#quiz").html("<h2>All Done</h2>");
            $("#quiz").append("Number of Correct Answers:" + correctAnswer);
            $("#quiz").append("<br>");
            $("#quiz").append("Number of Wrong Answers:" + "" + wrongAnswer);
            $("#quiz").append("<br>");

            $("#quiz").append("Unanswered:" + "" + unanswered);

            var startOver = $("<button>").addClass("endButton");
            startOver.text("Start Over?");
            $("#quiz").append("<br>");
            $("#quiz").append(startOver);
            $('.endButton').on("click", function () {
                i = 0;
                wrongAnswer=0;
                correctAnswer=0;
                unanswered=0;
                quiz(i);
                // console.log(i);
            });


        }

        function Timer() {
            var timer = 25;

            // console.log("calling timer");
            var newDivTimer = $("<div />");
            newDivTimer.text("Time Remaining:" + " " + timer + " " + "seconds");
            $("#quiz").prepend(newDivTimer);
            if (intervalID) {
                clearInterval(intervalID);
            }
            intervalID = setInterval(function () {
                timer--;
                newDivTimer.text("Time Remaining:" + " " + timer + " " + "seconds");

                // console.log(timer);
                if (timer == 0 && i < quesArr.length) {
                    $("#quiz").text("Time's Up!!");
                    $("#quiz").append("<br>");
                    $("#quiz").append("Correct answer is "+" ");
                    correctAnswerFunc();
                    unanswered++;

                    i++;
                    clearInterval(intervalID);

                    if (i > quesArr.length - 1) {
                        endPage();
                    }
                    else {
                        // console.log('else');
                        setTimeout(function () {
                            quiz(i);
                        }, 3000);
                    }

                }

            }, 1 * 1000)
        }
        function quiz(i) {
            if (i < quesArr.length) {
                $("#quiz").text(quesArr[i].ques);
                Timer();
                var btn1 = $("<button>").addClass("button");
                btn1.text(quesArr[i].opt1);
                $("#quiz").append(btn1);
                var btn2 = $("<button>").addClass("button");
                btn2.text(quesArr[i].opt2);
                $("#quiz").append(btn2);
                var btn3 = $("<button>").addClass("button");
                btn3.text(quesArr[i].opt3);
                $("#quiz").append(btn3);
                var btn4 = $("<button>").addClass("button");
                btn4.text(quesArr[i].opt4);
                $("#quiz").append(btn4);
                // $(".button").on("click", function () {
                buttonClick();
            }

            else {
                endPage();
            }
        };
        quiz(i);
        function correctAnswerFunc() {
            var audio = $("<audio>");
            audio.attr("src", audioArray[0]);
            $("#quiz").append(audio);
            var image = $("<img>");
            // console.log(quesArr[i].image);
            image.attr("src", quesArr[i].image);
            $("#quiz").append(quesArr[i].ans);

            $("#quiz").append("<br>");

            $("#quiz").append(image);

        }
        function buttonClick() {
            $(".button").on("click", function () {

                // console.log("clicked");
                // console.log($(this).text());
                // console.log(i);
                if (($(this).text()) == quesArr[i].ans) {
                    // alert("correct");
                    correctAnswer++;
                    $("#quiz").text("YAYY!!!Correct Answer");
                    $("#quiz").append("<br>");

                    correctAnswerFunc();


                }
                else {
                    wrongAnswer++;
                    // console.log("wrongAnswer" + wrongAnswer);
                    // console.log("index-wrong" + i);
                    $("#quiz").text("NOPE!!!" + " " + quesArr[i].ans + " " + "is the Correct Answer");
                    var audio = $("<audio>");
                    audio.attr("src", audioArray[1]);
                    $("#quiz").append(audio);


                    var image = $("<img>");
                    image.attr("src", quesArr[i].image);
                    $("#quiz").append("<br>");

                    $("#quiz").append(image);

                }
                i++;
                setTimeout(function () {
                    quiz(i);
                }, 3000);
                // console.log(i);
            });

        };
    });
});