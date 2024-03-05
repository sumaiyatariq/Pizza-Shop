let cart = document.querySelector(".shopping-cart");

document.querySelector("#cart").onclick = () => {
  cart.classList.toggle("active");
  login.classList.remove("active");
  navbar.classList.remove("active");
};

let login = document.querySelector(".login-form");

document.querySelector("#user").onclick = () => {
  login.classList.toggle("active");
  cart.classList.remove("active");
  navbar.classList.remove("active");
};
let navbar = document.querySelector(".navbar");

document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle("active");
  cart.classList.remove("active");
  login.classList.remove("active");
};
var swiper = new Swiper(".home-slider", {
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  grabcursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// menu
window.onscroll = () => {
  cart.classList.remove("active");
  login.classList.remove("active");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".menu-slider", {
  grabCursor: true,
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  spaceBetwwen: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let previewContainer = document.querySelector(".menu-preview-container");
let previewBox = previewContainer.querySelectorAll(".menu-preview");

document.querySelectorAll(".menu .box").forEach((menu) => {
  menu.onclick = () => {
    previewContainer.style.display = "flex";
    let name = menu.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewContainer.querySelector("#close").onclick = () => {
  previewContainer.style.display = "none";
  previewBox.forEach((close) => {
    close.classList.remove("active");
  });
};

// function validateForm() {
//   const cname = document.getElementById("cname").value;
//   const cemail = document.getElementById("cemail").value;
//   const cnumber = document.getElementById("cnumber").value;
//   const csubject = document.getElementById("csubject").value;
//   const cmessage = document.getElementById("cmessage").value;

//   if (cname == "") {
//     var s = document.getElementById("name-error");
//     s.innerHTML = "Name is required";
//     return false;
//   } else if (cemail == "") {
//     document.getElementById("name-error").innerHTML = "";
//     var s = document.getElementById("email-error");
//     s.innerHTML = "Email is required";
//     return false;
//   } else if (cnumber == "") {
//     document.getElementById("email-error").innerHTML = "";
//     var s = document.getElementById("number-error");
//     s.innerHTML = "Number is required";
//     return false;
//   } else if (csubject == "") {
//     document.getElementById("number-error").innerHTML = "";
//     var s = document.getElementById("subject-error");
//     s.innerHTML = "Subject is required";
//     return false;
//   } else if (cmessage == "") {
//     document.getElementById("subject-error").innerHTML = "";
//     var s = document.getElementById("message-error");
//     s.innerHTML = "Message is required";
//     return false;
//   } else {
//     alert("Form Submit Successfully");
//     document.getElementById("cname").value = "";
//     document.getElementById("cemail").value = "";
//     document.getElementById("cnumber").value = "";
//     document.getElementById("csubject").value = "";
//     document.getElementById("cmessage").value = "";
//     document.getElementById("name-error").innerHTML = "";
//     document.getElementById("email-error").innerHTML = "";
//     document.getElementById("number-error").innerHTML = "";
//     document.getElementById("subject-error").innerHTML = "";
//     document.getElementById("message-error").innerHTML = "";
//     return false;
//   }
// }

function validateForm() {
  var isValid = true;
  var fields = ["name", "email", "phone", "subject", "message"];

  // Clear previous errors
  fields.forEach(function (field) {
    document.getElementById(field).classList.remove("error-field");
    document.getElementById(field + "Error").innerText = "";
  });

  // Validate each field
  fields.forEach(function (field) {
    var value = document.getElementById(field).value;
    if (value == "") {
      document.getElementById(field + "Error").innerText =
        field.charAt(0).toUpperCase() + field.slice(1) + " is required";
      document.getElementById(field).classList.add("error-field");
      isValid = false;
    } else if (field === "email" && !validateEmail(value)) {
      document.getElementById("emailError").innerText = "Invalid email format";
      document.getElementById("email").classList.add("error-field");
      isValid = false;
    }
  });

  if (isValid) {
    // Form is valid, now collect data
    var formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    console.log(formData);
    // Assuming form data is collected and sent here

    // Clear the form after successful validation and data handling
    document.contactForm.reset();

    // Optionally, clear individual error messages if any remain
    fields.forEach(function (field) {
      document.getElementById(field + "Error").innerText = "";
    });

    alert("Form submitted successfully!");
  }

  // Prevent form submission to allow AJAX call or further actions
  return false;
}

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateField(field) {
  var value = document.getElementById(field).value;
  var isValid = true; // Assume valid initially
  var errorMessage = "";

  // Validate the field
  if (value == "") {
    errorMessage =
      field.charAt(0).toUpperCase() + field.slice(1) + " must be filled out";
    isValid = false;
  } else if (field === "email" && !validateEmail(value)) {
    errorMessage = "Invalid email format";
    isValid = false;
  }

  // Update the UI based on validation
  if (isValid) {
    document.getElementById(field).classList.remove("error-field");
    document.getElementById(field + "Error").innerText = "";
  } else {
    document.getElementById(field).classList.add("error-field");
    document.getElementById(field + "Error").innerText = errorMessage;
  }
}
