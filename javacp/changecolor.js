let textColors = ["#000", "white", "white"];
let backgroundColors = ["white","#173b45", "#251b18"];
let headerColors = ["white","#173b45", "#251b18"];
let currentColorIndex = 0;
let excludedElement = document.querySelector(".right");

function changeColor() {
  let allText = document.querySelectorAll("body *:not(.right):not(.discount):not(.text_discount):not(.icon-menu)");
  for (let i = 0; i < allText.length; i++) {
    allText[i].style.color = textColors[currentColorIndex];
  }

  document.body.style.backgroundColor = backgroundColors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % textColors.length;

}

document.getElementById("js-change-color").addEventListener("click", changeColor); 


function toggleDiv() {
  var x = document.getElementById("right");
  var y = document.getElementById("center")
  var c = document.getElementById("btn-input")
  var as = document.querySelectorAll(".audio")


  if (x.style.display === "none") {
    x.style.display = "block";
    c.classList.add("change")
    for(const a of as){
      a.classList.add("margin")
    }
    y.style.width = "80%"
    

   
  } else {
    x.style.display = "none";
    y.style.width = "100%"
    c.classList.remove("change")
    for(const a of as){
      a.classList.remove("margin")
    }
    
   
  }
}

document.getElementById("btn-input").addEventListener("click", toggleDiv); 


