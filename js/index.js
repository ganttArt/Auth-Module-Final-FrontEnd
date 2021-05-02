'use strict';

console.log('html hooked up');

const tempusers = ['Chris', 'Simone', 'Eli', 'Yuliya'];

function signupSubmitHandler(event) {
  event.preventDefault();
  console.log(event.target);
  console.log(event.target.username.value);
  console.log(event.target.password.value);
}

function signinSubmitHandler(event) {
  event.preventDefault();
  console.log(event.target);
  console.log(event.target.username.value);
  console.log(event.target.password.value);
}

function usersSubmitHandler(event) {
  event.preventDefault();
  const validated = true;
  if (!validated) {
    alert('user is not validated')
  } else {
    const users = document.getElementById('users');
    users.innerHTML = '';
    tempusers.forEach(user => {
      let userElem = document.createElement('li');
      userElem.innerText = user;
      users.appendChild(userElem);
    })
    console.log(users);
  }
}

const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', signupSubmitHandler);

const signinForm = document.getElementById('signin-form');
signinForm.addEventListener('submit', signinSubmitHandler);

const users = document.getElementById('show-users');
users.addEventListener('submit', usersSubmitHandler);

const card = document.getElementById("card");

function openRegister() {
    card.style.transform = "rotateY(-180deg)";
}
function openLogin() {
    card.style.transform = "rotateY(0deg)";
}