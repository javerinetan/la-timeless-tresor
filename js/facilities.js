let complimentary=document.getElementById("complimentary");
let paid=document.getElementById("charged");

//reset category color
function resetColor() {
  document.getElementById("btn0").className="";
  document.getElementById("btn1").className="";
  document.getElementById("btn2").className="";
}

//show all the facilities
function showAll() {
  let btn=document.getElementById("btn0");
  resetColor();
  btn.classList="click" //only with this class name will the colour change
  complimentary.classList.add("display"); //so that all faclities will be seen
  paid.classList.add("display");
}

//show complimentary facilities
function showComplimentary(){
  let btn=document.getElementById("btn1");
  resetColor();
  btn.classList="click"
  paid.classList.remove("display"); //paid section will be removed
  complimentary.classList.add("display");;
}

//show not free facilities
function showNotFree(){
  let btn=document.getElementById("btn2");
  resetColor();
  btn.classList="click"
  paid.classList.add("display");
  complimentary.classList.remove("display"); //complimentary section will be removed
}
