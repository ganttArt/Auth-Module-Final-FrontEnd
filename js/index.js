'use strict';

console.log('html hooked up');

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
  console.log(event.target);
}

const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', signupSubmitHandler);

const signinForm = document.getElementById('signin-form');
signinForm.addEventListener('submit', signinSubmitHandler);

const users = document.getElementById('show-users');
users.addEventListener('submit', usersSubmitHandler);
