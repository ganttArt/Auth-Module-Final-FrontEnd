'use strict';
/* global axios */

const URL = "https://auth-module-final-teamsecy.herokuapp.com";
// const URL = "http://localhost:3000";

function signupSubmitHandler(event) {
  event.preventDefault();
  axios.post(`${URL}/signup`,
    {
      username: event.target.username.value,
      password: event.target.password.value,
      role: 'admin'
    })
    .catch(e => alert("Failure signing up. This username may already be in the database."))
    .then(alert("You've signed up!"));
}

function signinSubmitHandler(event) {
  event.preventDefault();
  axios.post(`${URL}/signin`, {},
    {
      auth: {
        username: event.target.username.value,
        password: event.target.password.value
      }
    })
    .catch(e => {alert("Failed login.")})
    .then(response => {
      console.log(response);
      document.cookie = `user=${response.data.token}`;
      alert("You're signed in!")
    })
  ;
}

async function usersSubmitHandler(event) {
  event.preventDefault();
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('user='))
    .split('=')[1];
    // approach from https://developer.mozilla.org/en-US/docs/Web/API/document/cookie

  if (!cookieValue) {
    alert('user is not validated')
  } else {
    try {
      let response = await axios.get(`${URL}/users`,
        {
          headers: { Authorization: `Bearer ${cookieValue}` }
        }
      );
      const users = document.getElementById('users');
      users.innerHTML = '';
      response.data.forEach(user => {
        let userElem = document.createElement('li');
        userElem.innerText = user;
        users.appendChild(userElem);
      })
    }
    catch (e) {alert('Error making request to the backend.')}
  }
}

const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', signupSubmitHandler);

const signinForm = document.getElementById('signin-form');
signinForm.addEventListener('submit', signinSubmitHandler);

const users = document.getElementById('show-users');
users.addEventListener('submit', usersSubmitHandler);
