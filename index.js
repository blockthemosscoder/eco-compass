setInterval(checkPortrait(),100);

function darkPersonMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   var button = document.getElementById("lightModeButton");
   if (element.classList.contains("dark-mode"))  {
    button.textContent = "Lightmode"
   }
   else{
    button.textContent = "Lightmode"
   }
}
function swapFont() {
  element = document.body;
  element.classList.toggle("fontChanged");
  
}

var modal = document.getElementById("myModal");
function checkPortrait() {
  if (window.matchMedia("(orientation: portrait)").matches) {
    modal.style.display = "block";
} 
  else if (window.matchMedia("(orientation: landscape)").matches){
    modal.style.display = "none";
}
}

setInterval("checkPortrait()", 100);
