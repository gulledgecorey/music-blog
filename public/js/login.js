//let loginform = document.getElementById("login");
//let registerform = document.getElementById("register");

const registerbtn = () => {
  console.log("register world");
  document.getElementById("login").style.display = "none";
  document.getElementById("register").style.display = "block";
  btn.style.left = "110px";
};
const loginbtn = () => {
  console.log("login world");
  document.getElementById("login").style.display = "block";
  document.getElementById("register").style.display = "none";
  btn.style.right = "0px";
};
document.querySelector(".log-btn").addEventListener("click", loginbtn);

document.querySelector(".sign-btn").addEventListener("click", registerbtn);

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector(".username-login").value.trim();
  const password = document.querySelector(".password-login").value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
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
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
