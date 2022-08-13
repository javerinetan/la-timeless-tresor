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
