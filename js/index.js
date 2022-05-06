function displayNav() {
  var x = document.getElementById("myTopnav");

  if (!x.className.includes("responsive")) {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}

var navbar = document.getElementById("myTopnav");
var logo = document.getElementById("navLogo");
var account = document.getElementById("account");

window.onscroll = function() {
  if (window.pageYOffset >= 300) {
    navbar.classList.add("sticky");
    logo.src = "resources/images/logov2_black.png";
    account.src = "resources/images/user_black.png";
  }
  else {
    navbar.classList.remove("sticky");
    logo.src = "resources/images/logov2_white.png";
    account.src = "resources/images/user_white.png";
  }
}
