var newUser = $("#inputUser");
var newPass1 = $("#inputpass1");
var newPass2 = $("#inputPass2");
var create = $("#create");

create.click(function() {
  console.log(newPass1.val());
  console.log(newPass2.val());
  var username = newUser.val();
  if (newPass1.val() == newPass2.val()) {
    console.log("hi")
    var password = newPass1.val();
  }
  
  else {
    $("#title").html("Those passwords don't match.");
  }
 
})