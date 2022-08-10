// Align Modal Image Carousel Images to the left
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true
});

function show(element) {
  document.getElementById("exterior").className="exterior";
  document.getElementById("dining").className="dining";
  document.getElementById("experience").className="experience";
  document.getElementById("interior").className="interior";
  document.getElementById(element.title).classList.add("display");
  removeHighlight();
  element.classList.add("highlight");
}

function removeHighlight() {
  document.getElementById("btn0").className="";
  document.getElementById("btn1").className="";
  document.getElementById("btn2").className="";
  document.getElementById("btn3").className="";
  document.getElementById("btn4").className="";
}

function showAll() {
  document.getElementById("exterior").classList.add("display");
  document.getElementById("dining").classList.add("display");
  document.getElementById("experience").classList.add("display");
  document.getElementById("interior").classList.add("display");
  removeHighlight();
  document.getElementById("btn0").classList.add("highlight");
}

// Get the modal
var modal = document.getElementById("myModal");
var navbar = document.getElementById("myTopnav");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var indicator = document.getElementById("indicator");
var body = document.querySelector("body");
var captionText = document.getElementById("caption");

function displayModal(image, text) {
  modal.style.display = "block";
  navbar.classList.remove("sticky");
  indicator.style.display = "none";
  body.style.overflow = "hidden";
  modalImg.src = image;
  captionText.innerHTML = text;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  navbar.classList.add("sticky");
  indicator.style.display = "block";
  body.style.overflow = "auto";
}
