var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true,
  imagesLoaded: true,
  percentPosition: false,
  contain: true,
  wrapAround: true,
  freeScroll: true,
  freeScrollFriction: 0.03,
  autoPlay: 3500,
  pauseAutoPlayOnHover: false
});
