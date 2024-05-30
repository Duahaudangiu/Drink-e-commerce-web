let navbar = document.querySelector(".navbar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}
window.addEventListener("scroll", function(){
  var header = document.querySelector("nav");
  header.classList.toggle('sticky', window.scrollY > 0);
});


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".tracaphe-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let bangtinArrow = document.querySelector(".bangtin-arrow");
bangtinArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".sp-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

// Add this function to hide the login and show the user section
function showUserSection() {
  var loginSection = document.getElementById("loginSection");
  var userSection = document.getElementById("userSection");

  if (loginSection) {
    loginSection.style.display = "none";
  }

  if (userSection) {
    userSection.style.display = "flex";
  }
}


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.avatar')) {
    var dropdowns = document.getElementsByClassName("user-dropdown");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// Call the showUserSection function when the page loads
document.addEventListener('DOMContentLoaded', function () {
  showUserSection();
});

function toggleUserDropdown() {
  console.log("Dropdown toggled");
  var dropdown = document.getElementById("userDropdown");
  dropdown.classList.toggle("show");
}
