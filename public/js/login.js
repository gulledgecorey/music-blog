let loginToggleEl = document.querySelector(".log-btn");
let signupToggleEl = document.querySelector(".sign-btn");

console.log(loginToggleEl);

const loginToggle = () => {
  console.log("login world");
  document.getElementById("login").style.display = "block";
  document.getElementById("register").style.display = "none";
  btn.style.left = "0px";
  btn.style.right = "0px";
};
const signupToggle = () => {
  console.log("signup world");
  document.getElementById("login").style.display = "none";
  document.getElementById("register").style.display = "block";
  btn.style.left = "110px";
};

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector(".email-login").value.trim();
  const password = document.querySelector(".password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      console.log(response);
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector(".username-signup").value.trim();
  const email = document.querySelector(".email-signup").value.trim();
  const password = document.querySelector(".password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

loginToggleEl.addEventListener("click", loginToggle);
signupToggleEl.addEventListener("click", signupToggle);
