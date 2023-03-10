var navbar = document.getElementById("myTopnav");
var logo = document.getElementById("navLogo");
var sidebtn = document.getElementById("sideBtn");
var account = document.getElementById("account");
var form = document.getElementById("bookForm");
var indicator = document.getElementById("indicator");

var firstLoad = true;

// responsive navbar menu
function displayNav() {
  var x = document.getElementById("myTopnav");

  if (!x.className.includes("responsive")) {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}

// navbar switching behaviour
window.onscroll = function() {
  if (window.pageYOffset >= 250) {
    navbar.classList.add("sticky");
    sidebtn.classList.add("alt-color");
    form.classList.add("alt-color");
    indicator.classList.add("to-top");

    if (firstLoad) {
      firstLoad = false;
      form.classList.remove("show-form");
      sidebtn.classList.remove("btn-active");
    }

    logo.src = "../resources/images/logov2_black.png";
    account.src = "../resources/images/user_black.png";
  }
  else {
    navbar.classList.remove("sticky");
    sidebtn.classList.remove("alt-color");
    indicator.classList.remove("to-top");
    form.classList.add("alt-color");

    logo.src = "../resources/images/logov2_white.png";
    account.src = "../resources/images/user_white.png";
  }
}

// display booking form
function displayBookingForm() {
  if (!form.className.includes("show-form")) {
    form.classList.add("show-form");
    sidebtn.classList.add("btn-active");
  } else {
    form.classList.remove("show-form");
    sidebtn.classList.remove("btn-active");
  }
}

// closes booking form
function dismissBookingForm(){
  form.classList.remove("show-form");
  sidebtn.classList.remove("btn-active");
}

// action button behaviour
function scrollAction(){
  if (window.pageYOffset >= 300){
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, window.innerHeight - navbar.clientHeight);
  }
}
