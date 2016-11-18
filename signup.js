var newUser = $("#inputUser");
var newPass1 = $("#inputPass1");
var newPass2 = $("#inputPass2");
var create = $("#create");

var wrong = "0"
create.click(function() {
  console.log(newUser.val());
  console.log(newPass1.val());
  console.log(newPass2.val());

  var username = newUser;
  if (newPass1 == newPass2) {
    var password = newPass1;
  }
  else {
    $("#wrong").css({dipslay: "inline-block"});
    wrong = "1"
  }
  console.log(username)
  console.log(password)
  console.log(wrong)
})