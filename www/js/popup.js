"use strict";

var words = ["LOADING", "MOM", "FRIENDS", "HUNT", "INSANITY", "DAD", "LICK", "BROTHER", "WAKE", "GIRLFRIEND", "TATAU", "MAN", "HOME"];

window.addEventListener("load", function () {
  var randoms = window.document.getElementsByClassName("randoms");
  for(var i = 0; i < randoms.length; i++) {
    changeWord(randoms[i]);
  }
}, false);


function changeWord(a) {
  a.style.opacity = '0.1';
  a.innerHTML = words[getRandomInt(0, words.length - 1)];
  // a.innerHTML = messageList[getRandomInt(0, messageList.length - 1)];
  setTimeout(function () {
    a.style.opacity = '1';
  }, 425);
  setTimeout(function () {
    changeWord(a);
  }, getRandomInt(500, 4500));
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
