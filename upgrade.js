$("#welcome").click(function() {
  $("#welcome").css({display: "none"});
})

var clickAdd = 1;

var idleAdd = 0

var price1 = 500;

var price2 = 1000;

if (localStorage.getItem("is2x") == 1) {
  price1 = localStorage.getItem("c")
  $("#price1").html("T" + price1)
}
else {
  $("#price1").html("T" + price1)
}

if (localStorage.getItem("isTacoBell") == 1) {
  price2 = localStorage.getItem("d");
  $("price2").html("T" + price2);
}
else {
  $("#price2").html("T" + price2);
}

$("#item2").click(function() {
  console.log(tacoCount);
  console.log(price2);
  animateObject2()
  if (tacoCount >= price2) {
    idleAdd = (idleAdd + 10);
    localStorage.setItem("idleAdd", idleAdd)
    localStorage.setItem("isTacoBell", 1)
    price2 = (price2 * 1.57);
    localStorage.setItem("d", price2)
  }
  else if (tacoCount < price2) {
    $("#text2").html("you cannot afford this item.");
    setTimeout(function() {
      $("#text2").html("Multiply your <br> click by 2!");
    }, 1000)
  }
})

$("#item1").click(function() {
  animateObject()
  if (tacoCount >= price1) {
  localStorage.setItem("is2x",1)
  clickAdd = (clickAdd * 2);
  localStorage.setItem("b",clickAdd)
  localStorage.setItem("c",price1)
  localStorage.setItem("tacos",tacoCount - price1) 
  price1 = (price1 * 3);
  $("#price1").html("T" + price1)

  }
  else if (tacoCount < price1) {
    $("#text1").html("you cannot afford this item.");
    setTimeout(function() {
      $("#text1").html("Multiply your <br> click by 2!");
    }, 1000)
  }
})

function animateObject2() {
 $("#item2").css({"background-color": "purple"});
    setTimeout(function() {
      $("#item2").css({"background-color": "mediumpurple"});
    }, 100)
}
function animateObject() {
  $("#item1").css({background: "darkblue"});
    setTimeout(function() {
    $("#item1").css({background: "blue"});
  }, 100)
}