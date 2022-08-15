var checkinElem = document.querySelector("#chkin");
var checkoutElem = document.querySelector("#chkout");
var display = document.getElementById("bookingDetails");
var form = document.getElementById("form-section");
var price = 0;

window.addEventListener('scroll', colorChange);
checkinElem.valueAsDate = new Date();
document.getElementById('chkin-display').value = checkinElem.value;

// changes booking detail form color
function colorChange(){
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
  updatePrice();
}

// update room type in booking details
function updateRoomType(name, prc, id) {
  document.getElementById(id).value = name;
  price = prc;
  updatePrice();
}

function updatePrice(){
  var chkin = new Date(checkinElem.value);
  var chkout = new Date(checkoutElem.value);
  if (chkin != "Invalid Date" && chkout != "Invalid Date") {
    var days = (chkout - chkin) / (1000 * 3600 * 24);
    var total = price * days;
    document.getElementById('submit').innerHTML = 'Proceed - $'+ total +'<i class="ti-angle-right"></i>';
  }
}

//this is to get the current date time
//split them to variable
var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate());

//make sure that date is correct
if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

//set the check in and check out date
var dateTomorrow = year + "-" + month + "-" + (date + 1);
var dateToday = year + "-" + month + "-" + date;

checkinElem.setAttribute("min", dateToday);
checkoutElem.setAttribute("min", dateTomorrow);
