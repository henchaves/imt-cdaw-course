"use strict";

const usersDiv = document.querySelector('#users');

function modify(e) {
  alert("Comment modified!");
  const userDiv = document.getElementById(e.currentTarget.parentNode.id);
  const userP = userDiv.querySelector("p");
  userP.innerText = 'Comment modified!';
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

function getNewId() {
  let lastId = usersDiv.lastChild.previousSibling.id;
  lastId = Number(lastId.slice(4)) + 1;
  return `user${lastId}`;
}

document.getElementById("addNew").addEventListener("click", function (e) {
  alert(e.type + " on add !");
})

let modifiers = document.getElementsByClassName("modify");
Array.from(modifiers).forEach(m => m.addEventListener("click", modify));

let remover = document.getElementsByClassName("remove");
Array.from(remover).forEach(m => m.addEventListener("click", deleter));

let adder = document.getElementById("addNew");
adder.addEventListener("click", addComment)