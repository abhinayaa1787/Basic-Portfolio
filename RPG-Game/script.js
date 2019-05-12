var charHealthpoint;
var enemyHealthpoint;
var defenderHealthpoint;
var expcharattackPower = 0;
var charattackPower = Math.ceil((Math.random() * 10), 5);
var defattackPower = Math.ceil((Math.random() * 30), 1);


function attack(charHealthpoint, defenderHealthpoint) {
  if (charHealthpoint > 0 && defenderHealthpoint > 0) {
    expcharattackPower = expcharattackPower + charattackPower;

    charHealthpoint = charHealthpoint - defattackPower;

    defenderHealthpoint = defenderHealthpoint - expcharattackPower;
    parseInt($("#yourCharDiv").find(".point").text(charHealthpoint));
    parseInt($("#defenderSection").find(".point").text(defenderHealthpoint));
  }

  if (charHealthpoint <= 0) {
    $("#defenderSection").text("You Lost!!!").append("<button>Restart</button>").addClass("restrtBtn");
    $(".restrtBtn").on("click", function () {
      location.reload();
    });

  }

  if (defenderHealthpoint <= 0) {
    $("#defenderSection").find(".char").remove();
    $("#defenderSection").text("You defeated the defender! His points are" + defenderHealthpoint +"health points"+"\n" );
    $("#defenderSection").append("choose next defender");
    $(".enemy").on("click", enemyClick);

  }
  if(charHealthpoint <= 0 && defenderHealthpoint <= 0){
    $("#defenderSection").text("Health points for both are under zero,power nullified").append("<button>Restart</button>").addClass("restrtBtn");
    $(".restrtBtn").on("click", function () {
      location.reload();

  });


}
if(($("#enemiesDiv").find(".enemy").length==0 )&& ($("#defenderSection").find(".enemy").length==0) && ($("#imgDiv").find(".char").length<4)){
  $("#defenderSection").empty();
  $("#defenderSection").append("You won by defeating all enemies!!!Do you like to start again? ").append("<button>Restart</button>").addClass("restrtBtn");
  $(".restrtBtn").on("click", function () {
    location.reload();
  });


}
}

$(".char").on("click", function () {
  var character = $(this).remove();
  $("#yourCharDiv").append(character);
  var enemies = $(".char").not($(this)).remove();
  enemies.css({ "background-color": "red", "border": "solid 1px black" });
  enemies.addClass("enemy");
  $("#enemiesDiv").append(enemies);
  $(".enemy").on("click", enemyClick)
});
function enemyClick() {
  $(".enemy").off("click");

  var defender = $(this).remove();
  $("#defenderSection").empty();

  $("#defenderSection").append(defender);

  defender.css({ 'background-color': 'black', 'color': 'white', 'border': ' solid 1px rgb(88, 218, 88)' });
}
$("#fightBtn").on("click", function (event) {
  var charHealthpoint = parseInt($("#yourCharDiv").find(".point").text());
  var defenderHealthpoint = parseInt($("#defenderSection").find(".point").text());
  attack(charHealthpoint, defenderHealthpoint);
  
});




