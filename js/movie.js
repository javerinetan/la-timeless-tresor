var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true,
  imagesLoaded: true,
  percentPosition: false,
  contain: true,
  wrapAround: true,
  autoPlay: 0 !Important,
  pauseAutoPlayOnHover: true !Important,
});

const slider = document.querySelector(".slider");
const btnLeft = document.getElementById("moveLeft");
const btnRight = document.getElementById("moveRight");
const indicators = document.querySelectorAll(".indicator");
let baseSliderWidth = slider.offsetWidth;
let activeIndex = 0; // the current page on the slider
let movies = [
  {
    src: "../resources/images/movie1.jpg",
  },
  {
    src: "../resources/images/movie2.jpeg",
  },
  {
    src: "../resources/images/movie3.jpg",
  },
  {
    src: "../resources/images/movie6.jpg",
  },
  {
    src: "../resources/images/movie5.jpg",
  },
  {
    src: "../resources/images/movie4.jpg",
  },
  // ...
];
// Fill the slider with all the movies in the "movies" array
function populateSlider() {
  movies.forEach((image) => {
    // Clone the initial movie thats included in the html, then replace the image with a different one
    const newMovie = document.getElementById("movie0");
    let clone = newMovie.cloneNode(true);
    let img = clone.querySelector("img");
    img.src = image.src;
    slider.insertBefore(clone, slider.childNodes[slider.childNodes.length - 1]);
  });
}
populateSlider();
populateSlider();
// delete the initial movie in the html


//here on
