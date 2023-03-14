for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () { 
       checkSound(this.innerHTML);
       buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress",function(keyPressed) {
      checkSound(keyPressed.key);
      buttonAnimation(keyPressed.key);
});


function checkSound(key) {
    switch (key) {
        case "w":
            var audioForw = new Audio("sounds/tom-1.mp3");
            audioForw.play();
            break;

        case "a":
            var audioFora = new Audio("sounds/tom-2.mp3");
            audioFora.play();
            break;

        case "s":
            var audioForl = new Audio("sounds/crash.mp3");
            audioForl.play();
            break;

        case "d":
            var audioForj = new Audio("sounds/kick-bass.mp3");
            audioForj.play();
            break;

        case "j":
            var audioFork = new Audio("sounds/snare.mp3");
            audioFork.play();
            break;

        case "k":
            var audioFord = new Audio("sounds/tom-4.mp3");
            audioFord.play();
            break;

        case "l":
            var audioFors = new Audio("sounds/tom-3.mp3");
            audioFors.play();
            break;

        default:
            console.log("Some problem!");
            break;
    }
}

function buttonAnimation(curKey) {
    document.querySelector("." + curKey).classList.add("pressed");  

    setTimeout(function() {
        document.querySelector("." + curKey).classList.remove("pressed"); 
    },100);
}