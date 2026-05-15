document
  .querySelector(".btn-submit")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const dob = document.getElementById("dob").value;

    const gender =
      document.querySelector("input[name='gender']:checked")?.nextElementSibling
        .innerText || "";

    const qualification = document.getElementById("qualification").value;

    const marks = document
      .querySelector("input[placeholder='Enter percentage or grade']")
      .value.trim();

    const course = document.querySelector(
      ".form-section select:not(#qualification)",
    ).value;

    const batch =
      document.querySelector("input[name='batch']:checked")?.nextElementSibling
        .innerText || "";

    const address = document
      .querySelector("textarea[placeholder='Enter your address']")
      .value.trim();

    const city = document
      .querySelector("input[placeholder='Enter city']")
      .value.trim();

    const pin = document
      .querySelector("input[placeholder='Enter pin code']")
      .value.trim();

    const guardianName = document
      .querySelector('input[placeholder="Enter guardian\'s name"]')
      .value.trim();

    const guardianPhone = document
      .querySelector('input[placeholder="Enter guardian\'s number"]')
      .value.trim();

    const source = document.querySelector(
      ".form-section select:last-of-type",
    ).value;

    const specialRequirements = document
      .querySelector(
        "textarea[placeholder='Mention any special requirements...']",
      )
      .value.trim();

    const registrationData = {
      FullName: fullName,
      Phone: phone,
      Email: email,
      DateOfBirth: dob,
      Gender: gender,
      Qualification: qualification,
      Marks: marks,
      Course: course,
      BatchTiming: batch,
      Address: address,
      City: city,
      PinCode: pin,
      GuardianName: guardianName,
      GuardianPhone: guardianPhone,
      HeardFrom: source,
      SpecialRequirements: specialRequirements,
    };

    if (validateData(registrationData)) {
      console.log("Registration Data:", registrationData);
      alert("Registration Successful!");
    } else {
      alert("Registration Failed! Please enter valid data.");
    }
  });

function validateData(data) {
  let isValid = true;

  if (!data.FullName) {
    alert("Full Name is required");
    isValid = false;
  } else if (!/^[A-Za-z\s]+$/.test(data.FullName)) {
    alert("Full Name should contain only alphabets");
    isValid = false;
  }

  if (!/^[6-9]\d{9}$/.test(data.Phone)) {
    alert("Enter a valid Indian mobile number");
    isValid = false;
  }

  if (!/^[A-Za-z0-9._]+@(gmail\.com|outlook\.com|ricr\.in)$/.test(data.Email)) {
    alert("Enter a valid email");
    isValid = false;
  }

  if (!data.DateOfBirth) {
    alert("Date of Birth is required");
    isValid = false;
  }

  if (!data.Gender) {
    alert("Please select gender");
    isValid = false;
  }

  if (data.Qualification === "Select qualification" || !data.Qualification) {
    alert("Please select qualification");
    isValid = false;
  }

  if (!data.Marks) {
    alert("Enter your marks/grade");
    isValid = false;
  }

  if (data.Course === "Select course" || !data.Course) {
    alert("Please select course");
    isValid = false;
  }

  if (!data.BatchTiming) {
    alert("Please select batch timing");
    isValid = false;
  }

  if (!data.Address) {
    alert("Address is required");
    isValid = false;
  }

  if (!/^[A-Za-z\s]+$/.test(data.City)) {
    alert("Enter a valid city name");
    isValid = false;
  }

  if (!/^\d{6}$/.test(data.PinCode)) {
    alert("Enter a valid 6-digit pin code");
    isValid = false;
  }

  if (!/^[A-Za-z\s]+$/.test(data.GuardianName)) {
    alert("Enter valid guardian name");
    isValid = false;
  }

  if (!/^[6-9]\d{9}$/.test(data.GuardianPhone)) {
    alert("Enter valid guardian mobile number");
    isValid = false;
  }

  return isValid;
}
