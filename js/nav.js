function displayNav() {
  var x = document.getElementById("myTopnav");
  if (!x.className.includes("responsive")) {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}

var navbar = document.getElementById("myTopnav");
window.onscroll = function() {
  if (window.pageYOffset >= 300) {
    navbar.classList.add("sticky");
  }
  else {
      navbar.classList.remove("sticky");
    }
}
