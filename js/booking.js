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
  document.getElementById(element.name).value = document.getElementById(element.id).value;
}

// update room type in booking details
function updateRoomType(name, id) {
  console.log(id);
  document.getElementById(id).value = name;
}

//this is to get the current date time
//split them to variable
var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

//make sure that date is correct
if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

//set the check in and check out date
var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#chkin");
var checkoutElem = document.querySelector("#chkout");

checkinElem.setAttribute("min", dateTomorrow);
checkoutElem.setAttribute("min", dateTomorrow);
