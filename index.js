

function playMusic(path, btntxt) {
    var aud = new Audio(path);
    aud.play();  
    btntxt= btntxt.toUpperCase(); 
    element= document.querySelector("."+btntxt);
    var originalBoxShadow = element.style.boxShadow;
    element.style.boxShadow = "0 8px 16px 0 red, 0 6px 20px 0 red";
    setTimeout(() => {
        element.style.boxShadow = originalBoxShadow;
    }, 100);
}

var path = "./sounds/tom-1.mp3"; 
document.addEventListener("keydown" ,function(event) {
    //  console.log(event);
    var btntxt = event.key;

    switch (btntxt) {
        case "w":
            path = "./sounds/tom-1.mp3";    
            playMusic(path,btntxt);
        break;
        case "a":
            path = "./sounds/tom-2.mp3";    
            playMusic(path,btntxt);
        break;
        case "s":
            path = "./sounds/tom-3.mp3";    
            playMusic(path,btntxt);
        break;
        case "d":
            path = "./sounds/tom-4.mp3";    
            playMusic(path,btntxt);
        break;
        case "l":
            path = "./sounds/snare.mp3";    
            playMusic(path,btntxt);
        break;
        case "k":
            path = "./sounds/kick-bass.mp3";    
            playMusic(path,btntxt);
        break;
        case "j":
            path = "./sounds/crash.mp3";    
            playMusic(path,btntxt);
        break;
        default:
            break;
    }
}); 


