var newUser = $("#inputUser");
var newPass1 = $("#inputPass1");
var newPass2 = $("#inputPass2");
var create = $("#create");

create.click(function() {
  console.log(newPass2.val());
  var username = newUser.val();
  if (newPass1.val() == newPass2.val()) {
    var password = newPass1.val();
  }
  else {
    $("#wrong").css({dipslay: "inline-block"});
  }
  console.log(username)
  console.log(password)
})