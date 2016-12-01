var taco = $("#taco");

var tacoCount = 0;

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

setInterval(function() {
  tacoCount = tacoCount + 
},1000)

function tacoClicked() {
  taco.css({background: "ghostwhite"});
  
  setTimeout(function() {
      taco.css({background: "white"});
    }, 100)
  
  moreTaco()
  $("#tacoTitle").html("You have " + tacoCount + " tacos!");
}

function moreTaco() {
  console.log(localStorage.getItem("is2x"));
  if (localStorage.getItem("is2x") == 1) {
    console.log("hi")
  tacoCount = (tacoCount + parseInt(localStorage.getItem("b")));
  }
  else {
    console.log("hey")
    tacoCount = (tacoCount + 1)
  }
  localStorage.setItem("tacos",tacoCount);
};

$("#h").click(function() {
  localStorage.setItem("tacos", tacoCount)
  localStorage.setItem("btnpressed", 1)
  localStorage.setItem("b", clickAdd)
})

$("#i").click(function() {
  localStorage.clear()
})
