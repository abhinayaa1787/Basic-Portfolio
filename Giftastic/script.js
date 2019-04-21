var animalArr = ["Elephant", "Giraffe", "Dog", "Horse", "Gorilla", "Lion", "Tiger", "Cheetah", "Rabbit", "Monkey", "Panda", "koala"];
addButton();
$("#submitButton").on("click", function () {
  var animalText = $("#animalName").val().trim();
  console.log(animalText);
  if (animalText != "") {
    animalArr.push(animalText);
    console.log(animalArr);
    addButton();
  }
});
function addButton() {
  $("#buttonAdd").empty();
  for (i = 0; i < animalArr.length; i++) {
    var animalButton = $("<button>").addClass("button");
    animalButton.text(animalArr[i]);
    $("#buttonAdd").append(animalButton);

  }
  gifAdd();

}
function gifAdd() {
  $(".button").on("click", function () {
    var animal = $(this).text();
    console.log(animal);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=MUWcufS4gFGmUwME9qAkB9pCupkO2c0s&limit=10";
    console.log(queryURL);
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

      .then(function (response) {
        var result = response.data;

        for (var i = 0; i < result.length; i++) {
          var animalDiv = $("<div>").addClass("animalDiv");
          var pTitle = $("<p>").text("Title: " + result[i].title);
          var p = $("<p>").text("Rating: " + result[i].rating);
          var imageDiv = $("<img>").addClass("gif");
          imageDiv.attr("data-still", result[i].images.original_still.url);
          imageDiv.attr("data-state", "still")
          imageDiv.attr("src", result[i].images.original_still.url);
          imageDiv.attr("data-animate", result[i].images.original.url);

          animalDiv.append(pTitle);
          animalDiv.append(p);
          animalDiv.append("<button id='fav' class='btn'><i class='fa fa-heart'></i></button>");
          /*Trying to add download functionality*/

          // var aTag = $("<a id='download' class='btn' download><i class='fas fa-download' ></i> </a>")
          // aTag.attr("href", result[i].images.original.url)
          // animalDiv.append(aTag);

          animalDiv.append(imageDiv);
          imageDiv.on("click", function () {
            var gifState = $(this).attr("data-state");
            if (gifState === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            }

            else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");

            }
          });
          $("#gifImages").prepend(animalDiv);
      

      }
      $(".btn").on("click", function () {
        console.log("clicked");
         var favGif = $("<img>").attr("src",$(this).parent().find("img").attr("data-animate"));
         $("#favorites").prepend(favGif);
      });

  /*Download*/
  // $("#download").on("click",function(){
  //   console.log("clicked");
  //   var dload;
  //   dload.attr("href",$(this).parent().find('img').attr('data-animate'));
  //   // dload.attr("download","");
  // //  dload.html("<a href='$(this).parent().find('img').attr('data-animate'))' download>");
  // //  animalDiv.append(dload);

  // })


  });
});
}
