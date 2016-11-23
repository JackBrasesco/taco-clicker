var taco = $("#taco");

var tacoCount = 0;

if (localStorage.getItem("btnpressed") == 1) {
  tacoCount = parseInt(localStorage.getItem("tacos"));
  clickAdd = parseInt(localStorage.getItem("multiplier"));
}
else {
 tacoCount = 0 
}
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

function moreTaco() {
  tacoCount = (tacoCount + clickAdd);
  localStorage.setItem("tacos",tacoCount);
};

$("#h").click(function() {
  localStorage.setItem("tacos", tacoCount)
  localStorage.setItem("btnpressed", 1)
  localStorage.setItem("multiplier", clickAdd)
})
