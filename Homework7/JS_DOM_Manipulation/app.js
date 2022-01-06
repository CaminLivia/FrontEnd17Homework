function validateForm() {
  // First Name
  var fname = document.querySelector("#fname");
  if (fname.value.trim() == "" || fname.value == null) {
    fname.classList.add("invalid");
    return false;
  } else {
    fname.classList.remove("invalid");
    fname.classList.add("valid");
  }

  //Last Name
  var lname = document.querySelector("#lname");
  if (lname.value.trim() == "" || lname.value == null) {
    lname.classList.add("invalid");
    return false;
  } else {
    lname.classList.remove("invalid");
    lname.classList.add("valid");
  }

  // Gender
  var genderDiv = document.querySelector(".options");
  var gender = document.querySelector("input[type=radio][name=gender]");

  // Aici se valideaza doar daca e bifata prima optiune (Ex. M, daca le inversez
  // ordinea se va valida doar pt F). Nu am reusit sa imi dau seama de ce face asta
  if (!gender.checked) {
    genderDiv.classList.add("invalid");
    return false;
  } else {
    genderDiv.classList.remove("invalid");
    genderDiv.classList.add("valid");
  }

  //Message
  var message = document.querySelector("#message");
  if (message.value.trim() == "" || message.value == null) {
    message.classList.add("invalid");
    return false;
  } else {
    message.classList.remove("invalid");
    message.classList.add("valid");
  }
  console.log(fname.value);
  console.log(lname.value);
  console.log(gender.value);
  console.log(message.value);

  var r = document.querySelector("#response");
  var button =
    "<span style='float: right' onclick='closeButton()'><i class='fa fa-close' style='font-size: 20px'></i></span>";
  r.innerHTML = " Thank you for contacting us, " + fname.value + button;
  r.style.visibility = "visible";

  return false;
}

function closeButton() {
  var r = document.querySelector("#response");
  r.style.visibility = "hidden";
  location.reload();
}
