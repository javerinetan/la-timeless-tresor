// Align Modal Image Carousel Images to the left
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true
});

function show(element) {
  document.getElementById("promovideo").style.display = "none";
  document.getElementById("exterior").className="exterior";
  document.getElementById("dining").className="dining";
  document.getElementById("experience").className="experience";
  document.getElementById("interior").className="interior";
  document.getElementById(element.title).classList.add("display");
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
  document.getElementById("promovideo").style.display = "block";
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
  modal.style.display = "flex";
  indicator.style.display = "none";
  modalImg.src = image;
  captionText.innerHTML = text;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  indicator.style.display = "block";
  body.style.overflow = "auto";
}

// video
TweenMax.set(".play-circle-01", {
  rotation: 90,
  transformOrigin: "center"
})

TweenMax.set(".play-circle-02", {
  rotation: -90,
  transformOrigin: "center"
})

TweenMax.set(".play-perspective", {
  xPercent: 6.5,
  scale: .175,
  transformOrigin: "center",
  perspective: 1
})

TweenMax.set(".play-video", {
  visibility: "hidden",
  opacity: 0,
})

TweenMax.set(".play-triangle", {
  transformOrigin: "left center",
  transformStyle: "preserve-3d",
  rotationY: 10,
  scaleX: 2
})

const rotateTL = new TimelineMax({ paused: true })
  .to(".play-circle-01", .7, {
    opacity: .1,
    rotation: '+=360',
    strokeDasharray: "456 456",
    ease: Power1.easeInOut
  }, 0)
  .to(".play-circle-02", .7, {
    opacity: .1,
    rotation: '-=360',
    strokeDasharray: "411 411",
    ease: Power1.easeInOut
  }, 0)

const openTL = new TimelineMax({ paused: true })
  .to(".play-backdrop", 1, {
    opacity: .95,
    visibility: "visible",
    ease: Power2.easeInOut
  }, 0)
  .to(".play-close", 1, {
    opacity: 1,
    ease: Power2.easeInOut
  }, 0)
  .to(".play-perspective", 1, {
    xPercent: 0,
    scale: 1,
    ease: Power2.easeInOut
  }, 0)
  .to(".play-triangle", 1, {
    scaleX: 1,
    ease: Power2.easeInOut
  }, 0)
  .to(".play-triangle", 1, {
    rotationY: 0,
    ease: Power2.easeInOut
  }, 0)
  .to(".play-video", 1, {
    visibility: "visible",
    opacity: 1
  }, .5)


const button = document.querySelector(".play-button")
const backdrop = document.querySelector(".play-backdrop")
const close = document.querySelector(".play-close")

button.addEventListener("mouseover", () => rotateTL.play())
button.addEventListener("mouseleave", () => rotateTL.reverse())
button.addEventListener("click", () => openTL.play())
backdrop.addEventListener("click", () => openTL.reverse())
close.addEventListener("click", e => {
  e.stopPropagation()
  openTL.reverse()
})

button.addEventListener("click", function() {
  document.getElementsById("video").play()
})
