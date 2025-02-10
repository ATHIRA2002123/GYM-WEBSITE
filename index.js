document.addEventListener('DOMContentLoaded', function () {
  let navbarToggle = document.getElementById('navbar-toggle');
  navbarToggle.addEventListener('click', function () {
    let navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
  });
});


function openRegisterForm() {
  document.getElementById("registerForm").style.display = "block";
}

function closeRegisterForm() {
  document.getElementById("registerForm").style.display = "none";
}

function submitForm() {
  // Check if the form is filled
  let fullName = document.getElementsByName("fullname")[0].value;
  let email = document.getElementsByName("email")[0].value;
  let mobile = document.getElementsByName("mobile")[0].value;
  let duration = document.querySelector('input[name="duration"]:checked');
  let payment = document.querySelector('input[name="payment"]:checked');
  let personalTraining = document.querySelector('input[name="personal-training"]:checked');
  let termsAndConditions = document.getElementsByName("sign-me")[0].checked;

  if (
    fullName.trim() === "" ||
    email.trim() === "" ||
    mobile.trim() === "" ||
    !duration ||
    !payment ||
    !personalTraining ||
    !termsAndConditions
  ) {
    alert("Please fill in all the required fields and accept the terms and conditions before submitting the form.");
    return;
  }

  alert("Thank you, " + fullName + "! Your form has been submitted successfully.");
  closeRegisterForm();
}

//Js for image carousel
function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
  x = (x <= 0) ? images.length - 1 : x - 1;
  document.getElementById("img").src = images[x];
}

function startTimer() {
  setInterval(displayNextImage, 5000);
}

var images = [], x = -1;
images[0] = "../images/bruce-mars.jpeg";
images[1] = "../images/couple-training.jpg";
images[2] = "../images/fitnish-media.jpg";
images[3] = "../images/../images/training.jpeg";
images[4] = "../images/../../images/pexels-leon.jpg";