let outdoor=document.getElementById("outdoor");
let indoor=document.getElementById("indoor");

//reset title color
function resetColor() {
  document.getElementById("btn0").className="";
  document.getElementById("btn1").className="";
  document.getElementById("btn2").className="";
}

function showAll() {
  let btn=document.getElementById("btn0");
  resetColor();
  btn.classList="click"
  indoor.style.display = 'block';
  outdoor.style.display = 'block';
}

function showOutdoor(){
  let btn=document.getElementById("btn1");
  resetColor();
  btn.classList="click"
  indoor.style.display = 'none';
  outdoor.style.display = 'block';
}

function showIndoor(){
  let btn=document.getElementById("btn2");
  resetColor();
  btn.classList="click"
  indoor.style.display = 'block';
  outdoor.style.display = 'none';
}
