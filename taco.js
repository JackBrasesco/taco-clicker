var taco = $("#taco");

if (localStorage.getItem("tacos")
$("#tacoTitle").html("You have " + tacoCount + " tacos!");

taco.click(function() {
  tacoClicked();
})

function tacoClicked() {
  taco.css({background: "ghostwhite"});
  
  setTimeout(function() {
      taco.css({background: "white"});
    }, 100)
  
  moreTaco()
  $("#tacoTitle").html("You have " + tacoCount + " tacos!");
}
var tacoCount = 0;

function moreTaco() {
  tacoCount = (tacoCount + 1);
  localStorage.setItem("tacos",tacoCount);
};

$("#h").click(function() {
  localStorage.setItem("tacos", tacoCount)
  localStorage.setItem("btnpressed", 1)
})
