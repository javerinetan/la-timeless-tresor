var review = document.querySelector('.review-carousel');
var flkty = new Flickity( review, {
  prevNextButtons: false,
  autoPlay: 4500,
  pauseAutoPlayOnHover: false
});

function displayMenu(element){
  var menus = ["maincourses", "entrees","desserts", "drinks"];
  for (var menu of menus) {
    document.getElementById(menu).style.display = "none";
  }
  boxes = document.querySelectorAll('.Course li');
  for (const box of boxes) {
    box.classList.remove('selected');
  }

  element.classList.add('selected');
  document.getElementById(element.title).style.display = "block";
}
