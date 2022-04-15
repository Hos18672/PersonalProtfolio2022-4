const switchButton = document.getElementById("switch");
var container = document.querySelector("#nav-list-container");
var container2 = document.querySelector("#nav-list-container1");

// Dark mode Switch onClick
switchButton.addEventListener("click", () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var items = container.querySelectorAll(
    ".nav-a-item , .nav-a-item1 , .nav-a-item2 , .nav-a-item3 , .nav-a-item4"
  );
  items.forEach((item) => item.classList.toggle("dark-mode"));
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

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isItemInView(items[i])) {
      items[i].classList.add("show");
    } else {
      items[i].classList.remove("show");
    }
  }
}

// listen for events
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);
