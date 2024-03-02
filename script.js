
let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart').onclick = () => {
     cart.classList.toggle('active');
     login.classList.remove('active');
     navbar.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#user').onclick = () => {
     login.classList.toggle('active');
     cart.classList.remove('active');
     navbar.classList.remove('active');
}
let navbar= document.querySelector('.navbar')

document.querySelector('#menu').onclick= () =>{
     navbar.classList.toggle('active');
     cart.classList.remove('active');
     login.classList.remove('active');
}
var swiper= new Swiper(".home-slider",{
     autoplay:{
          delay:7500,
          disableOnInteraction:false,
     },
     grabcursor:true,
     loop:true,
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
})
const x = document.getElementById("demo");

function getlocation() {
     if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
     } else {
           x.innerHTML = "Geolocation is not supported by this browser";
     }
}
function showPosition(position) {
     x.innerHTML = "Latitude: " + position.coords.latitude + 
     "<br>Longitude: " + position.coords.longitude;
   }

   