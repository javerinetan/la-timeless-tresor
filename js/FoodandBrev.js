var review = document.querySelector('.review-carousel');
var flkty = new Flickity( review, {
  prevNextButtons: false,
  autoPlay: 4500,
  pauseAutoPlayOnHover: false
});

document.getElementById("maincourses").classList.add("display");

function displayMenu(element){
  var menus = ["maincourses", "entrees","desserts", "drinks"];
  for (var i in menus) {
    document.getElementById(menus[i]).className="";
  }
  boxes = document.querySelectorAll('.Course li');
  for (const box of boxes) {
    box.classList.remove('selected');
  }

  element.classList.add('selected');

  document.getElementById(element.title).classList.add("display");
}
