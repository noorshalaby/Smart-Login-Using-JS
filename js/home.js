var welcomeMessage = document.querySelector("#welcomeMessage");

var logOutBtn = document.querySelector("#logOutBtn");

if (localStorage.getItem("userName") !== null) {
  welcomeMessage.innerHTML = `Welcome ${localStorage.getItem("userName")}`;
}

function logOut() {
  window.location.href = "login.html";
  localStorage.removeItem("userName");
}

logOutBtn.addEventListener("click", logOut);
