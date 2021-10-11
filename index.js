function choices(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/crash.mp3");
             audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log("Can't be Determined");
    }
}
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",check);
}
function check(){
    choices(this.innerHTML);
    animation(this.innerHTML);
}
document.addEventListener("keypress",function(event){
    var alpha=event.key;
     choices(alpha);
     animation(alpha);
})
function animation(key){
    var m=("."+(key));
    document.querySelector(m).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(m).classList.remove("pressed");
    },100);
}