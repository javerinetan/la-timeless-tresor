var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = date + "-" + month + "-" + year;
var checkinElem = document.querySelector("#checkin-date");
var checkoutElem = document.querySelector("#checkout-date");
var reservationdate = document.querySelector("#date");

reservationdate.setAttribute("min",dateTomorrow) //this is so it starts one day after the day it is today
checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}


function myFunction() {
  alert("Please check your email for the confirmation email. Do verify within 3 hours!");
}

function display(){
  let name = form.Name.value;
  document.write("Name: " + name )
}
