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

    aboutIndex = 1;
    showSection(aboutIndex);
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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSection(n) {
  var i;
  var sections = document.getElementsByClassName("about-sections");
  if (n > sections.length) {aboutIndex = 1}
  if (n < 1) {aboutIndex = sections.length}
  for (i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  sections[aboutIndex-1].style.display = "block";
}
var aboutIndex = 1;
showSection(aboutIndex);
function plusSection(n) {
  showSection(aboutIndex += n);
}
function currentSlide(n) {
  showSection(aboutIndex = ns);
}



