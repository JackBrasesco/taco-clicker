$("#welcome").click(function() {
  $("#welcome").css({display: "none"});
})

var clickAdd = 1;

$("#item1").click(function() {
  clickAdd = (clickAdd * 2);
  localStorage.setItem("multiplier",clickAdd)
  console.log("hi")
})