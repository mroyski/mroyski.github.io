// CAROUSEL
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// COLLAPSE
var coll = document.getElementsByClassName("colla");
var x;

for (x = 0; x < coll.length; x++) {
  coll[x].addEventListener("click", function() {
    this.classList.toggle("activate");
    var stuff = this.nextElementSibling;
    if (stuff.style.display === "block") {
      stuff.style.display = "none";
    } else {
      stuff.style.display = "block";
    }
  });
}

// NAVBAR
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});