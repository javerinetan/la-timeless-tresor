var display = document.getElementById("bookingDetails");
var form = document.getElementById("form-section");

window.addEventListener('scroll', colorChange);

// changes booking detail form color
function colorChange(){
  // console.log(window.pageYOffset);
  // console.log(window.innerHeight + form.clientHeight);
  if (window.pageYOffset >= window.innerHeight) {
    display.classList.add("alt-color");
  }
  else {
    display.classList.remove("alt-color");
  }
}

// show search result
function displayResults() {
  document.getElementById("results-title").innerHTML = "We found 2 Available Rooms";
  document.getElementById("results-sub").style.display = "none";
  document.getElementById("items").style.display = "block";
}

// updates booking details
function updateBooking(element) {
  document.getElementById(element.name).innerHTML = document.getElementById(element.id).value;
}

// update room type in booking details
function updateRoomType(name, id) {
  console.log(id);
  document.getElementById(id).innerHTML = name;
}
