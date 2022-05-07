var navbar = document.getElementById("myTopnav");
var logo = document.getElementById("navLogo");
var sidebtn = document.getElementById("sideBtn");
var account = document.getElementById("account");
var form = document.getElementById("bookForm");

function displayNav() {
  var x = document.getElementById("myTopnav");

  if (!x.className.includes("responsive")) {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}

window.onscroll = function() {
  if (window.pageYOffset >= 300) {
    navbar.classList.add("sticky");
    sidebtn.classList.add("alt-color");
    form.classList.add("alt-color");

    logo.src = "resources/images/logov2_black.png";
    account.src = "resources/images/user_black.png";
  }
  else {
    navbar.classList.remove("sticky");
    sidebtn.classList.remove("alt-color");
    form.classList.add("alt-color");

    logo.src = "resources/images/logov2_white.png";
    account.src = "resources/images/user_white.png";
  }
}


function displayBookingForm() {
  if (!form.className.includes("show-form")) {
    form.classList.add("show-form");
    sidebtn.classList.add("btn-active");
  } else {
    form.classList.remove("show-form");
    sidebtn.classList.remove("btn-active");
  }
}
