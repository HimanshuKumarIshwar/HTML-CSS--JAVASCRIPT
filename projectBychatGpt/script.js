

var aboutMe = document.getElementById("about-me");
var projects = document.getElementById("projects");
var contact = document.getElementById("contact");

// Add event listeners to the navigation links
document.getElementById("about-me-link").addEventListener("click", function() {
  aboutMe.style.display = "block";
  projects.style.display = "none";
  contact.style.display = "none";
});

document.getElementById("projects-link").addEventListener("click", function() {
  aboutMe.style.display = "none";
  projects.style.display = "block";
  contact.style.display = "none";
});

document.getElementById("contact-link").addEventListener("click", function() {
  aboutMe.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "block";
});







