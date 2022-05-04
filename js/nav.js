function displayNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
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
