var f = 1;
var arr = document.querySelectorAll(".drum");
var arr2 = {
  w: "tom-1",
  a: "tom-2",
  s: "tom-3",
  d: "tom-4",
  j: "snare",
  k: "crash",
  l: "kick-bass",
};
var temp;
for (var i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", function () {
    if (f === 1) {
      makeSound(this.innerText);
      buttonAnimation(this.innerText);
    }
  });
}

document.addEventListener("keydown", function (event) {
  if (f === 1) {
    makeSound(event.key);
    buttonAnimation(event.key);
  }
});

function makeSound(key) {
  if (!arr2[key]) {
    console.log("Key not added yet!");
    return;
  }
  var aud = new Audio("sounds/" + arr2[key] + ".mp3");
  aud.play();
}

function buttonAnimation(key) {
  if (!arr2[key]) {
    return;
  }
  var clList = document.querySelector("." + key).classList;
  clList.toggle("pressed");
  setTimeout(function () {
    clList.toggle("pressed");
  }, 100);
}

document.querySelector("#exit").addEventListener("click", function () {
  document.querySelector("body").classList.toggle("game-over");
  if (document.querySelector("#exit").innerHTML === "Retry?") {
    f = 1;
    document.querySelector("#exit").innerHTML = "Exit";
  } else {
    f = 0;
    document.querySelector("#exit").innerHTML = "Retry?";
  }
});
