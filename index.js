

function btnclick() {
    var aud = new Audio("./sounds/crash.mp3");
    aud.play(); 
}
var btns = document.querySelectorAll(".drum"); 
for(let i =0 ;i < btns.length ;  i++) {
    btns[i].addEventListener("click" , btnclick); 
}


