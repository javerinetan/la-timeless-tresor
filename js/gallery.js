function show(section) {
  document.getElementById("exterior").className="exterior"
  document.getElementById("dining").className="dining"
  document.getElementById("experience").className="experience"
  document.getElementById("interior").className="interior"
  document.getElementById(section).classList.add("display")
}

function showAll() {
  document.getElementById("exterior").classList.add("display")
  document.getElementById("dining").classList.add("display")
  document.getElementById("experience").classList.add("display")
  document.getElementById("interior").classList.add("display")
}

// Get the modal
var modal = document.getElementById("myModal");
var navbar = document.getElementById("myTopnav");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function displayModal(image, text) {
  modal.style.display = "block";
  navbar.classList.remove("sticky");
  modalImg.src = image;
  captionText.innerHTML = text;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  navbar.classList.add("sticky");
}
