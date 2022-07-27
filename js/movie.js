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
