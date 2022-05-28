var display = document.getElementById("bookingDetails");
var form = document.getElementById("form-section");

window.addEventListener('scroll', colorChange);

function colorChange(){
  if (window.pageYOffset >= window.innerHeight + form.clientHeight) {
    display.classList.add("alt-color");
  }
  else {
    display.classList.remove("alt-color");
  }
}
