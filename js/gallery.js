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
