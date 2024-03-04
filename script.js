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
const x = document.getElementById("demo");

function getlocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser";
  }
}
function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
function validateForm() {
  const cname = document.getElementById("cname").value;
  const cemail = document.getElementById("cemail").value;
  const cnumber = document.getElementById("cnumber").value;
  const csubject = document.getElementById("csubject").value;
  const cmessage = document.getElementById("cmessage").value;

  if (cname == "") {
    var s = document.getElementById("name-error");
    s.innerHTML = "Name is required";
    return false;
  } else if (cemail == "") {
    document.getElementById("name-error").innerHTML = "";
    var s = document.getElementById("email-error");
    s.innerHTML = "Email is required";
    return false;
  } else if (cnumber == "") {
    document.getElementById("email-error").innerHTML = "";
    var s = document.getElementById("number-error");
    s.innerHTML = "Number is required";
    return false;
  } else if (csubject == "") {
    document.getElementById("number-error").innerHTML = "";
    var s = document.getElementById("subject-error");
    s.innerHTML = "Subject is required";
    return false;
  } else if (cmessage == "") {
    document.getElementById("subject-error").innerHTML = "";
    var s = document.getElementById("message-error");
    s.innerHTML = "Message is required";
    return false;
  } else {
    alert("Form Submit Successfully");
    document.getElementById("cname").value = "";
    document.getElementById("cemail").value = "";
    document.getElementById("cnumber").value = "";
    document.getElementById("csubject").value = "";
    document.getElementById("cmessage").value = "";
    document.getElementById("name-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("number-error").innerHTML = "";
    document.getElementById("subject-error").innerHTML = "";
    document.getElementById("message-error").innerHTML = "";
    return false;
  }
}
