var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-item");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

function toggleNavMenu(){
    var x = document.getElementById("header");
    if (x.className === "header-nav") {
      x.className += " responsive";
      var humburgerBtn = document.getElementById("toggleBtn");
      humburgerBtn.className += " opened"
    } else {
      x.className = "header-nav";
      console.log("Have not Updated header")
    }
}