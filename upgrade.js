$("#welcome").click(function() {
  $("#welcome").css({display: "none"});
})

var clickAdd = 1;

var price1 = 500;

$("#price1").html("$" + price1)

$("#item1").click(function() {
  animateObject()
  localStorage.setItem("is2x",1)
  clickAdd = (clickAdd * 2);
  localStorage.setItem("b",clickAdd)
  price1 = (price1 * 5);
  $("#price1").html("$" + price1)
})

function animateObject() {
  $("#item1").css({background: "darkblue"});
    setTimeout(function() {
    $("#item1").css({background: "blue"});
  }, 100)
}