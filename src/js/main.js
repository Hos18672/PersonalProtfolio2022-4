const switchButton = document.getElementById("switch");
var container = document.querySelector("#nav-list-container");

// Dark mode Switch onClick
switchButton.addEventListener("click", () => {
  var element = document.body;
  element.classList.toggle("dark-mode");

});

// Hamburger Icon onClick
function toggleButton(menu) {
  menu.classList.toggle("open");
}
var con = document.getElementById("nav-list-container");
var it = con.getElementsByClassName("nav-item");

for (var i = 0; i < it.length; i++) {
  it[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active");
    this.className += "active";
  });
}

//--------- Scroll Animation -----------------

// Scroll animation About Page
function reveal() {
  var reveals = document.querySelectorAll(".about-main-container, .work-item, .education-item");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 160;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Scroll animation Projects Page
window.addEventListener("scroll", reveal);

var items = document.querySelectorAll("li");

function isItemInView(item) {
  var rect = item.getBoundingClientRect();
  return (
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var navbar = document.getElementById("h-container")

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isItemInView(items[i])) {
      items[i].classList.add("show");
    } else {
      items[i].classList.remove("show");
    }
  }
  var windowHeight = window.innerHeight;
  var navbar1 = navbar.getBoundingClientRect().bottom;
  var elementVisible = 60;

  if (navbar1 < windowHeight - elementVisible) {
    navbar1.classList.add("scrolled");
  } else {
    navbar1.classList.remove("scrolled");
  }

}

// listen for events
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);

var navbar = document.querySelector('.h-container')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}