var navbar = document.getElementById("myTopnav");
var logo = document.getElementById("navLogo");
var sidebtn = document.getElementById("sideBtn");
var account = document.getElementById("account");
var form = document.getElementById("bookForm");
var indicator = document.getElementById("indicator");

var firstLoad = true;

// if scroll down, hide book form
if (window.innerWidth > 1000){
  form.classList.add("show-form");
  sidebtn.classList.add("btn-active");
}

// responsive navbar menu
function displayNav() {
  var x = document.getElementById("myTopnav");

  if (!x.className.includes("responsive")) {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}

// Scrolling behaviour
window.onscroll = function() {
  if (window.pageYOffset >= 250) {
    navbar.classList.add("sticky");
    sidebtn.classList.add("alt-color");
    form.classList.add("alt-color");
    indicator.classList.add("to-top");

    if (firstLoad) {
      firstLoad = false;
      form.classList.remove("show-form");
      sidebtn.classList.remove("btn-active");
    }

    logo.src = "resources/images/logov2_black.png";
    account.src = "resources/images/user_black.png";
  }
  else {
    navbar.classList.remove("sticky");
    sidebtn.classList.remove("alt-color");
    indicator.classList.remove("to-top");
    form.classList.add("alt-color");

    logo.src = "resources/images/logov2_white.png";
    account.src = "resources/images/user_white.png";
  }
}

// Show the book now form
function displayBookingForm() {
  if (!form.className.includes("show-form")) {
    form.classList.add("show-form");
    sidebtn.classList.add("btn-active");
  } else {
    form.classList.remove("show-form");
    sidebtn.classList.remove("btn-active");
  }
}

// Dismiss form behaviour
function dismissBookingForm(){
  form.classList.remove("show-form");
  sidebtn.classList.remove("btn-active");
}

// Action button behaviour
function scrollAction(){
  if (window.pageYOffset >= 300){
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, window.innerHeight - navbar.clientHeight);
  }
}

// Room Selector
function displayRoom(element){
  boxes = document.querySelectorAll('.room-selector .box');
  for (const box of boxes) {
    box.classList.remove('selected');
  }

  element.classList.add('selected');
  document.getElementById('roomImage').src ="resources/images/galleryimg"+ element.id +".jpg";

}

// Carousel
var carousel = document.querySelector('.main-carousel');
var flkty1 = new Flickity( carousel, {
  imagesLoaded: true,
  percentPosition: false,
  contain: true,
  freeScroll: true,
  prevNextButtons: false,
  pageDots: false,
  autoPlay: 1500,
  pauseAutoPlayOnHover: false
});

var review = document.querySelector('.review-carousel');
var flkty = new Flickity( review, {
  prevNextButtons: false,
  autoPlay: 4500,
  pauseAutoPlayOnHover: false
});

var imgs = carousel.querySelectorAll('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

flkty1.on( 'scroll', function() {
  flkty1.slides.forEach( function( slide, i ) {
    var img = imgs[i];
    var x = ( slide.target + flkty1.x ) * -1/3;
    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
  });
});
