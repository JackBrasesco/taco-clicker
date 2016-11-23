$("#welcome").click(function() {
  $("#welcome").css({display: "none"});
})

var clickAdd = 1;


$("#item1").click(function() {
  localStorage.setItem("is2x",1)
  clickAdd = (clickAdd * 2);
  console.log(clickAdd);
  localStorage.setItem("b",clickAdd)
  console.log("hi")
})