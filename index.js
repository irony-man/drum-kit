for (var i=0;i<7; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  var btn = this.innerHTML;
  sound(btn);
  anime(btn);
});
}

document.addEventListener("keypress", function(e){
  sound(e.key);
  anime(e.key);
});

function sound(cur)
{
  switch(cur)
  {
    case "w":
    var tom1= new Audio("./sounds/tom1.mp3")
    tom1.play();
    break;

    case "a":
      var tom2= new Audio("./sounds/tom2.mp3")
      tom2.play();
    break;

    case "s":
      var tom3= new Audio("./sounds/tom3.mp3")
      tom3.play();
    break;

    case "d":
      var tom4= new Audio("./sounds/tom4.mp3")
      tom4.play();
    break;

    case "j":
    var crash= new Audio("./sounds/crash.mp3")
    crash.play();
    break;

    case "k":
    var kick= new Audio("./sounds/kick.mp3")
    kick.play();
    break;

    case "l":
    var snare= new Audio("./sounds/snare.mp3")
    snare.play();
    break;
  }
}

function anime(curr)
{
  var active=document.querySelector("."+curr);
  active.classList.add("pressed");
  setTimeout(function(){
    active.classList.remove("pressed");
  }, 100);
}