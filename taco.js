var taco = $("#taco");

var tacoCount = 0;

var is2x = 0

if (localStorage.getItem("btnpressed") == 1) {
  tacoCount = parseInt(localStorage.getItem("tacos"));
//  clickAdd = parseInt(localStorage.getItem("b"));
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
  if (localStorage.get == 1) {
  tacoCount = (tacoCount + parseInt(localStorage.getItem("b")));
  }
  else {
    tacoCount = (tacoCount + 1)
  }
  localStorage.setItem("tacos",tacoCount);
  console.log(is2x)
};

$("#h").click(function() {
  localStorage.setItem("tacos", tacoCount)
  localStorage.setItem("btnpressed", 1)
  localStorage.setItem("b", clickAdd)
})

$("#i").click(function() {
  localStorage.clear()
})
