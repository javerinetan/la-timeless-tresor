let complimentary=document.getElementById("complimentary");
let paid=document.getElementById("notFree");

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
  complimentary.style.display = 'block';
  paid.style.display = 'block';
}

function showComplimentary(){
  let btn=document.getElementById("btn1");
  resetColor();
  btn.classList="click"
  paid.style.display = 'none';
  complimentary.style.display = 'block';
}

function showNotFree(){
  let btn=document.getElementById("btn2");
  resetColor();
  btn.classList="click"
  paid.style.display = 'block';
  complimentary.style.display = 'none';
}
