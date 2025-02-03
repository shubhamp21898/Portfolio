import {app, getDb, ref, set, child, update, remove, get} from "./firebase.js";
const db = getDb;

//Login Page Code- Start
export function AuthenticateUser() {
  var LoginMobileNo = document.getElementById("mobileno");
  var LoginPassword = document.getElementById("password");
  const dbRef = ref(db);
  try {
    get(child(dbRef, "UsersList/" + LoginMobileNo.value)).then((snapshot) => {
      if (snapshot.exists()) {
        let dbpass = decPassword(snapshot.val().Password);
        if (dbpass == LoginPassword.value) {
          fnFlyAlert("Login success", "success");
          //login(snapshot.val());
        }
        else {
          fnFlyAlert("Wrong Password", "error");
        }
        
      }
      else {
        fnFlyAlert("User does not exists", "error");
      }
    })
  } catch (error) {
    fnFlyAlert(error, "error");
  }
}

export function login(user) {
  let keepLoggedIn = document.getElementById("customSwitch1").checked;
  if (!keepLoggedIn) {
    sessionStorage.setItem("user", JSON.stringify(user));
    window.location = "Home.html";
  }
  else {
    localStorage.setItem("keepLoggedIn", "Yes");
    localStorage.setItem("user", JSON.stringify(user));
    window.location = "Home.html"
  }
}
//Login Page Code- Start

//New user Registration Page Code- Start

var NewUsername = document.getElementById("username");
var NewEmail = document.getElementById("emailId");
var NewAddress = document.getElementById("address");
var NewMobile = document.getElementById("NewMobile");
var NewPassword = document.getElementById("NewPassword");

export function RegisterUser() {
  const dbRef = ref(db);
  try {
    get(child(dbRef, "UsersList/" + NewMobile.value)).then((snapshot) => {
        if (snapshot.exists()) {
            fnFlyAlert("Account Already Exist!", "error");
        }
        else {
            insertData()
        }
    });
  } catch (error) {
    fnFlyAlert(error, "error");
  }
}
export function insertData() {
  set(ref(db, "UsersList/" + NewMobile.value), {
      Username: NewUsername.value,
      Email: NewEmail.value,
      Password: encPassword(NewPassword.value),
      Mobile: NewMobile.value,
      Address: NewAddress.value
  }).then(() => {
      fnFlyAlert("User Added Successfully", "success");
  }).catch((error) => {
      fnFlyAlert(error, "error");
  });
}

//New user Registration Page Code- End

//Validation Function --Start
export function fnValidation() {
  document.querySelectorAll('.UserInfo-Submit').forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
  
      const action = button.dataset.action;
      const form = this.closest('form');
  
    if (form.checkValidity()) {
      form.classList.add('was-validated');
      
      if (action === 'SignIn') {
        AuthenticateUser();
      } else if (action === 'SignUp') {
        RegisterUser();
      }
      else if(action==='ContactUs'){
        ContactUsInsertData();
      }
    } else {
      event.stopPropagation();
      form.classList.add('was-validated');
    }
    });
  });
}
//Validation Function --End

//Contact Details Send to server Code --Start
export function ContactUsInsertData() {
  var ContactUsName = document.getElementById("ContactUsName");
  var ContactUsEmail = document.getElementById("ContactUsEmail");
  var ContactUsMessage = document.getElementById("ContactUsMessage");

  set(ref(db, "ContactUs/" + ContactUsName.value), {
      ContactUsName: ContactUsName.value,
      ContactUsEmail: ContactUsEmail.value,
      ContactUsMessage: ContactUsMessage.value,
  }).then(() => {
      fnFlyAlert("Your message has been sent succesfully.<br> Thank you!", "success");
      let ContactUsObj=document.getElementById("ContactUs");
      resetPopup(ContactUsObj);
  }).catch((error) => {
      fnFlyAlert(error, "error");
  });
}
//Contact Details Send to server Code --End