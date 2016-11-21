var taco = $("#taco");

$("#tacoTitle").html("You have " + localStorage.getItem("tacos") + " tacos!");

taco.click(function() {
  tacoClickedAnimation1();
})

function tacoClickedAnimation1() {
  taco.css({background: "ghostwhite"});
  
  setTimeout(function() {
      taco.css({background: "white"});
    }, 100)
  
  moreTaco()
  $("#tacoTitle").html("You have " + localStorage.getItem("tacos") + " tacos!");
  
}

var tacoCount = 0;

function moreTaco() {
  tacoCount = tacoCount + 1
  localStorage.setItem("tacos",tacoCount);
  console.log(localStorage.getItem("tacos");

}

var tacoPerSecond = 0;