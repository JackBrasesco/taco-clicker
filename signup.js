var newUser = $("#inputUser").val();
var newPass1 = $("#inputPass1").val();
var newPass2 = $("#inputPass2").val();
var create = $("#create");

wrong = 0
create.click(function() {
  var username = newUser;
  if (newPass1 == newPass2) {
    var password = newPass1;
  }
  else {
    $("#wrong").css({dipslay: "block"});
    wrong = "1"
  }
  console.log(username)
  console.log(password)
  
})