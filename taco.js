var taco = $("#taco");

taco.click(function() {
  tacoClickedAnimation1();
})

function tacoClickedAnimation1() {
  taco.css({background: "ghostwhite"});
  
  setTimeout(function() {
      taco.css({background: "white"});
    }, 100)
  
  moreTaco()
  $("#tacoTitle").html("You have " + tacoCount + " tacos!");
  
}


var tacoCount = 0;

function moreTaco() {
  tacoCount = tacoCount + 1
}

var tacoPerSecond = 0;

localStorage.setItem("tacos",tacoCount);
