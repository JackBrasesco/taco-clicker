$("#welcome").click(function() {
  $("#welcome").css({display: "none"});
})

var clickAdd = 1;

var price1 = 500;

if (localStorage.getItem("is2x") == 1) {
  price1 = localStorage.getItem("c")
  $("#price1").html("$" + price1)
}
else {
  
}
$("#item1").click(function() {
  animateObject()
  if (tacoCount >= price1) {
  localStorage.setItem("is2x",1)
  clickAdd = (clickAdd * 2);
  localStorage.setItem("b",clickAdd)
  localStorage.setItem("c",price1)
  price1 = (price1 * 3);
  tacoCount = (tacoCount - price1)
    
  $("#price1").html("$" + price1)

  }
  else if (tacoCount < price1) {
    $("#text1").html("you cannot afford this item.");
    setTimeout(function() {
      $("#text1").html("Multiply your <br> click by 2!");
    }, 2000)
  }
})

function animateObject() {
  $("#item1").css({background: "darkblue"});
    setTimeout(function() {
    $("#item1").css({background: "blue"});
  }, 100)
}