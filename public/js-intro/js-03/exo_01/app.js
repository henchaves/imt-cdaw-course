"use strict";

const usersDiv = document.querySelector('#users');
const textArea = document.querySelector("textarea");
const modifiers = document.getElementsByClassName("modify");
const remover = document.getElementsByClassName("remove");
const adder = document.getElementById("addNew");
const submitButton = document.getElementById("submitButton");
let currentUserId = "";

function modify(e) {
  currentUserId = e.currentTarget.parentNode.id;

  const userDiv = document.getElementById(currentUserId);
  const userP = userDiv.querySelector("p");
  textArea.value = userP.textContent;
  textArea.toggleAttribute("hidden");
  submitButton.toggleAttribute("hidden");
  submitButton.toggleAttribute("disabled");

}

function deleter(e) {
  alert("Comment removed!");
  usersDiv.removeChild(e.currentTarget.parentNode);
}

function addComment() {
  const newId = getNewId();
  usersDiv.innerHTML += `
              <div id="${newId}">
                <h4>Admin</h4>
                <p>New Comment</p>
                <button class="modify">Modify Comment</button>
                <button class="remove">Remove Comment</button>       
              </div>`
}

function handleSubmitButton(e) {
  e.preventDefault();
  if (textArea.textLength > 0) {
    const userDiv = document.getElementById(currentUserId);
    const userP = userDiv.querySelector("p");
    userP.textContent = textArea.value;
    textArea.value = "";
    textArea.toggleAttribute("hidden");
    submitButton.toggleAttribute("hidden");
    submitButton.toggleAttribute("disabled");
  } else {
    alert("This comment is not valid!");
  }

}

function getNewId() {
  let lastId = usersDiv.lastChild.previousSibling.id;
  lastId = Number(lastId.slice(4)) + 1;
  return `user${lastId}`;
}

document.getElementById("addNew").addEventListener("click", function (e) {
  alert(e.type + " on add !");
})

Array.from(modifiers).forEach(m => m.addEventListener("click", modify));

Array.from(remover).forEach(m => m.addEventListener("click", deleter));

adder.addEventListener("click", addComment)

submitButton.addEventListener("click", handleSubmitButton);