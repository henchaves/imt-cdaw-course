"use strict";

function handlerClick(e) {
  alert("Button Clicked");
  let target = "b1";
  if (e.target.id == "b1") target = "b2";

  e.target.removeEventListener("click", handlerClick);

  const nextButton = document.getElementById(target);
  nextButton.addEventListener("click", handlerClick);
}

const b1 = document.querySelector("#b1");
b1.addEventListener("click", handlerClick);