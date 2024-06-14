var loginEmail = document.querySelector("#loginEmail");

var loginPassword = document.querySelector("#loginPassword");

var loginBtn = document.querySelector("#loginBtn");

var userList = JSON.parse(localStorage.getItem("user")) || [];

var alertMessage = document.querySelector("#alertMessage");

function checkInputs() {
  for (i = 0; i < userList.length; i++) {
    if (
      userList[i].email == loginEmail.value &&
      userList[i].password == loginPassword.value
    ) {
      localStorage.setItem("userName", userList[i].name);
      return true;
    }
  }
}

function doLogin() {
  if (checkEmpty() == true) {
    getAlert("All Inputs Required", "red");
  } else {
    if (checkInputs() === true) {
      //Navigate
      window.location.href = "home.html";
    } else {
      //alert
      getAlert("Email Or Password Incorrect", "red");
    }
  }
}

function getAlert(text, color) {
  alertMessage.classList.remove("d-none");
  alertMessage.innerHTML = text;
  alertMessage.style.color = color;
}

function checkEmpty() {
  if (loginEmail.value === "" || loginPassword.value === "") {
    return true;
  } else {
    return false;
  }
}

loginBtn.addEventListener("click", doLogin);
