var taco = $("#taco");

$("#tacoTitle").html("You have " + localStorage.getItem("tacos") + " tacos!");

taco.click(function() {
  tacoClicked();
})

function tacoClicked() {
  taco.css({background: "ghostwhite"});
  
  setTimeout(function() {
      taco.css({background: "white"});
    }, 100)
  
  moreTaco()
  $("#tacoTitle").html("You have " + localStorage.getItem("tacos") + " tacos!");
  
}

if (localStorage.getItem("tacos") > 0) {
  tacoCount = localStorage.getItem("tacos");
}
  else {
  tacoCount = 0
  }

var tacoCount = localStorage.getItem("tacos");

function moreTaco() {
  tacoCount = tacoCount + 1
  localStorage.setItem("tacos",tacoCount);
  console.log(localStorage.getItem("tacos"));
}

var tacoPerSecond = 0;