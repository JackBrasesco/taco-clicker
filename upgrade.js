$("#welcome").click(function() {
  $("#welcome").css({display: "none"});
})

var clickAdd = 1;

localStorage.setItem("b",clickAdd);

$("#item1").click(function() {
  clickAdd = (clickAdd * 2);
  console.log(clickAdd);
  localStorage.setItem("b",clickAdd)
  console.log("hi")
})