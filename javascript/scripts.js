function showAbout() 
{
    var about = document.getElementById("about");
    var projects = document.getElementById("projects");
    var main = document.getElementById("main");
    var contact = document.getElementById("contact");
    main.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    about.style.display = "block";
} 

function showProjects() 
{
    var about = document.getElementById("about");
    var projects = document.getElementById("projects");
    var main = document.getElementById("main");
    var contact = document.getElementById("contact");
    main.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    projects.style.display = "block";

    slideIndex = 1;
    showSlides(slideIndex);
} 

function showContact() 
{
    var about = document.getElementById("about");
    var projects = document.getElementById("projects");
    var main = document.getElementById("main");
    var contact = document.getElementById("contact");
    about.style.display = "none";
    projects.style.display = "none";
    main.style.display = "none";
    contact.style.display = "block";
} 

function showHome() 
{
    var about = document.getElementById("about");
    var projects = document.getElementById("projects");
    var main = document.getElementById("main");
    var contact = document.getElementById("contact");
    about.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    main.style.display = "block";
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

