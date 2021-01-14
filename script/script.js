
var i = 0;
var txt = "Fachinformatiker/AE";
var speed = 200;

function typeWriter() {
    
  if (i < txt.length) {
    document.querySelector(".appearing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    i = 0;
    document.querySelector(".appearing").innerHTML = "";
    setTimeout(typeWriter, speed)  
  }
}
  
typeWriter();




