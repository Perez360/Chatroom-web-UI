function showAlert() {
  let myalert = document.getElementById("validity");
  myalert.innerHTML = "Invalid username or password";
}

function validate() {
  var email = document.getElementById("emailField").value.trim();
  let password = document.getElementById("passwordField").value.trim();

  if (email && password) {
    if (email === "isaacodei360@gmail.com" && password === "1234") {
      open("chat_room_page.html");
      
    } else {
      alert("Invalid username or password");
    }
  } else {
    alert("One or more field is empty");
  }
}
