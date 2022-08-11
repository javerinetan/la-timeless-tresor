var display = document.getElementById("bookingDetails");
var form = document.getElementById("form-section");

window.addEventListener('scroll', colorChange);

function colorChange(){
  console.log(window.pageYOffset);
  console.log(window.innerHeight + form.clientHeight);
  if (window.pageYOffset >= window.innerHeight) {
    display.classList.add("alt-color");
  }
  else {
    display.classList.remove("alt-color");
  }
}

function updateBooking(element) {
  console.log(element.name);
  console.log(element.id);
  document.getElementById(element.name).innerHTML = document.getElementById(element.id).value;
}
