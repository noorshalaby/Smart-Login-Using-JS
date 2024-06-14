var nameInput = document.querySelector("#name");

var emailInput = document.querySelector("#email");

var passInput = document.querySelector("#password");

var signUpBtn = document.querySelector("#signUpBtn");

var alertMessage = document.querySelector("#alertMessage");

var userList = [];

if (localStorage.getItem("user") !== null) {
  userList = JSON.parse(localStorage.getItem("user"));
}

function signUp() {
  user = {
    name: nameInput.value,
    email: emailInput.value,
    password: passInput.value,
  };
  if (checkEmpty() === true) {
    // alert
    getAlert("all inputs are required", "red");
  } else {
    if (checkEmailExist() === true) {
      //alert
      getAlert("Email Already Exist", "red");
    } else {
      userList.push(user);
      localStorage.setItem("user", JSON.stringify(userList));
      clearForm();
      getAlert("success", "green");
    }
  }
}

function getAlert(text, color) {
  alertMessage.classList.remove("d-none");
  alertMessage.innerHTML = text;
  alertMessage.style.color = color;
}

function clearForm() {
  nameInput.value = "";
  emailInput.value = "";
  passInput.value = "";
}

function checkEmpty() {
  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    passInput.value === ""
  ) {
    return true;
  } else {
    return false;
  }
}

function checkEmailExist() {
  for (i = 0; i < userList.length; i++) {
    if (userList[i].email === emailInput.value) {
      return true;
    }
  }
}

signUpBtn.addEventListener("click", signUp);
