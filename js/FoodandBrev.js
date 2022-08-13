var review = document.querySelector('.review-carousel');
var flkty = new Flickity( review, {
  prevNextButtons: false,
  autoPlay: 4500,
  pauseAutoPlayOnHover: false
});

function displayMenu(element){
  boxes = document.querySelectorAll('.Course li');
  for (const box of boxes) {
    box.classList.remove('selected');
  }

  element.classList.add('selected');

}
