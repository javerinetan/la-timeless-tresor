var navbar = document.getElementById("myTopnav");
var logo = document.getElementById("navLogo");
var sidebtn = document.getElementById("sideBtn");
var account = document.getElementById("account");
var form = document.getElementById("bookForm");
var indicator = document.getElementById("indicator");

var firstLoad = true;

if (window.innerWidth > 1000){
  form.classList.add("show-form");
  sidebtn.classList.add("btn-active");
}

function displayNav() {
  var x = document.getElementById("myTopnav");

  if (!x.className.includes("responsive")) {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}

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

function displayBookingForm() {
  if (!form.className.includes("show-form")) {
    form.classList.add("show-form");
    sidebtn.classList.add("btn-active");
  } else {
    form.classList.remove("show-form");
    sidebtn.classList.remove("btn-active");
  }
}

function dismissBookingForm(){
  form.classList.remove("show-form");
  sidebtn.classList.remove("btn-active");
}

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
var carousel = document.querySelector('.carousel');
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


var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);
