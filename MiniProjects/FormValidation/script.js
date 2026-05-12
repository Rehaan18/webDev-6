function Submit() {
  const name = document.getElementById("FullName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  document.getElementById("NameError").innerText = "";
  document.getElementById("PhoneError").innerText = "";
  document.getElementById("EmailError").innerText = "";
  document.getElementById("PasswordError").innerText = "";

  document.querySelectorAll(".error").forEach((element) => {
    element.innerText = "";
  });

  if (!/^[A-Za-z\s]+$/.test(name)) {
    document.getElementById("NameError").innerText = "Invalid Full Name";
  } else {
    console.log("Name:", name);
  }
  if (!/^[\d\s\-\+]+$/.test(phone) || phone.length < 10) {
    document.getElementById("PhoneError").innerText = "Invalid Phone Number";
  } else {
    console.log("Phone:", phone);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("EmailError").innerText = "Invalid Email Address";
  } else {
    console.log("Email:", email);
  }
  if (!/^[A-Za-z\s]+$/.test(password)) {
    document.getElementById("PasswordError").innerText = "Invalid Password";
  } else {
    console.log("Password:", password);
  }
  
  console.log("Form submitted! Check the console for details.");
}
