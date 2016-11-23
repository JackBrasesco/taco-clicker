var taco = $("#taco");

if (localStorage.getItem("btnpressed") == 1) {
  tacoCount = localStorage.getItem("tacos");
  console.log("hi")
}
else {
 tacoCount = 0 
 console.log("hey")
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
  tacoCount = (tacoCount + 1);
  localStorage.setItem("tacos",tacoCount);
};

$("#h").click(function() {
  localStorage.setItem("tacos", tacoCount)
  localStorage.setItem("btnpressed", 1)
})
