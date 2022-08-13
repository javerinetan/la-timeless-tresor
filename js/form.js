var create_workspace=document.querySelector("#next");
var next_click=document.querySelectorAll(".next-click"); //array with all the button with that class name
var back_click=document.querySelectorAll(".back-click");
var finish_click=document.querySelector(".finish-click");
var page_form=document.querySelectorAll(".page");
var list=document.querySelectorAll(".progress-bar li")
var progress = document.getElementById("progress");
var progressSteps = document.querySelectorAll(".progress-step");
var email=document.querySelector("#email");
var phoneNo=document.querySelector("#phone");

let formnumber=0;

create_workspace.addEventListener('click',function(){
    if(!validateform()){
        return false;
    }
   formnumber++;
   updateform();
});

next_click.forEach(function(next_page){
    next_page.addEventListener('click',function(){
         if(!validateform()){
        return false;
        }
         formnumber++;
         updateform();
    });
});


back_click.forEach(function(back_page){
    back_page.addEventListener('click',function(){
         formnumber--;
         updateform();
    });
});

finish_click.addEventListener('click',function(){
   if(!validateform()){
        return false;
    }
   formnumber++;
   updateform();
   var remove_progress=document.querySelector(".progressbar");
   remove_progress.classList.add('d-none');
   var title= document.querySelector(".section-title");
   title.innerHTML="Your Reservation has been confirmed";
   var status=document.querySelector(".status");
   status.style.marginBottom="20px";
});


function updateform(){
    page_form.forEach(function(page_number){
       page_number.classList.remove('currently'); //reset the page content
    });
    page_form[formnumber].classList.add('currently');

    //reset the colored progress circles
    progressSteps.forEach((progressStep, idx) => {
      if (idx < formnumber + 1) {
        progressStep.classList.add("progress-step-active");
      } else {
        progressStep.classList.remove("progress-step-active");
      }
    });
    //change the progress bar colour
    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width =
      ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

function validateform(){
    let validate=true; //overall
    let counter=0;
    var validate_form=document.querySelectorAll(".page.currently input");
    validate_form.forEach(function(val){
        if(val.hasAttribute('required')){
            if(val.value.length==0){
                counter++;
            }
        }
    });

    var slot=document.querySelectorAll(".page.currently select");
    slot.forEach(function(selection){
      if (selection.value==""){
        counter++;
      }
    })

    var filter = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (!filter.test(email.value)){
      counter++;
    }
    //

    var number = /^[0-9]{8}$/;
    if (!number.test(phoneNo.value)){
      counter++;
    }


    // var phone_input = document.getElementById("myform_phone");
    //
    // phone_input.addEventListener('input', () => {
    //   phone_input.setCustomValidity('');
    //   phone_input.checkValidity();
    // });
    //
    // phone_input.addEventListener('invalid', () => {
    //   if(phone_input.value === '') {
    //     phone_input.setCustomValidity('Enter phone number!');
    //   } else {
    //     phone_input.setCustomValidity('Enter phone number in this format: 6588031454');
    //   }
    // });


    if (counter > 0){
      validate=false;
    }

    return validate;
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
var checkinElem = document.querySelector("#checkin-date");
var checkoutElem = document.querySelector("#checkout-date");
var reservationdate = document.querySelector("#date");

reservationdate.setAttribute("min",dateTomorrow) //this is so it starts one day after the day it is today
checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}

// prompt the alert box
function myFunction() {
  alert("Please check your email for the confirmation email. Do verify within 3 hours!");
}

//autocomplete
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
/*An array containing all the months names in the world:*/
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/*initiate the autocomplete function on the "myInput" element, and pass along the months array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), months);
