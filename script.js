var drawable = 0;

$(document).keydown(function(keyPress) {
//  console.log(keyPress)
  if (keyPress.keyCode == 67) {
//    console.log(drawable)
    if (drawable == 0) {
      drawable = 1
    }
    if (drawable == 1) {
      drawable = 0
    }
  }
//  console.log(drawable)
  if (drawable = 1) {
    if (keyPress.keyCode == 87) {
      faceDown()
      goForward(10)
    }
    if (keyPress.keyCode == 68) {
      faceRight()
      goForward(10)
    }
    if (keyPress.keyCode == 65) {
      faceLeft()
      goForward(10)
    }
    if (keyPress.keyCode == 83) {
      faceUp()
      goForward(10)
    }
  }
})
$("#text").keydown(function(keyDown) {
  if (keyDown.keyCode == 13) {
    var whatToDraw = $("#text").val()
    var isSquare = whatToDraw.indexOf("square");
    var isRectangle = whatToDraw.indexOf("rectangle");
    var isOctogon = whatToDraw.indexOf("octogon");
    var isCircle = whatToDraw.indexOf("circle");
    if (isSquare > 0) {
      goForward(300)
      turnLeft()
      goForward(100)
      turnLeft()
      goForward(100)
      turnLeft()
      goForward(100)
    }
    else if (isRectangle > 0) {
      goForward(300);
      turnLeft()
      goForward(100);
      turnLeft()
      goForward(200);
      turnLeft()
      goForward(100);
    }
    else if (isOctogon > 0) {
      goForward(300);
      turn45Left();
      goForward(100);
      turn45Left();
      goForward(100);
      turn45Left();
      goForward(100);
      turn45Left();
      goForward(100);
      turn45Left();
      goForward(100);
      turn45Left();
      goForward(100);
      turn45Left();
      goForward(100);
    }
    else if (isCircle > 0) {
      goForward(200)
    for(x = 0; x < 360; x = x+1) {
      turnLeft(1)
      goForward(1) 
    }
    }
  }
})

$("#button").click(function() {
  $(".a").html("KA CHOW!");
  $(".a").css({color: "red"});
  $("text").attr("placeholder", "KA CHOW!!!")
  $("#mcqeen").animate({left: 200}, 1000);
  setTimeout(function() {
    turtle.animate({left: 10000}, 500);
    turtle.animate({top: -1000}, 100)
  }, 1000)
})