var element = document.body
const switchButton = document.getElementById("switch")
var container = document.querySelector("#nav-list-container")
var navbar = document.querySelector(".h-container")
var con = document.getElementById("nav-list-container")
var it = con.getElementsByClassName("li")
var ul = document.querySelector("ul")
var items = ul.querySelectorAll("li")
var navbar = document.getElementById("h-container")
var work_item = document.querySelector(".work-one")
var ds = document.querySelector(".datenschutz")
var windowHeight = window.innerHeight
var navbar1 = navbar.getBoundingClientRect().bottom
var elementVisible = 60

const metaViewport = document.querySelector('meta[name=viewport]')
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0')

// Dark mode Switch onClick
switchButton.addEventListener("click", () => {
  var element = document.body
  element.classList.toggle("dark-mode")
});

// Hamburger Icon onClick

let hm = document.querySelector(".hamburger-icon")
hm.addEventListener("click", () => {
  hm.classList.toggle("open")
});

for (var i = 0; i < it.length; i++) {
  it[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace("active")
    this.className += "active"
  });
}

//--------- Scroll Animation ----------------- //

// Scroll animation About Page
function reveal() {
  var reveals = document.querySelectorAll(
    ".about-main-container, .work-item, .education-item , .skills, .project-list-item"
  );
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 160

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active")
    } else {
      reveals[i].classList.remove("active")
    }
  }
}

// Scroll animation Projects Page
window.addEventListener("scroll", reveal)

function isItemInView(item) {
  var rect = item.getBoundingClientRect()
  return (
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
/* ------------------------------------------- */

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isItemInView(items[i])) {
      items[i].classList.add("show")
    } else {
      items[i].classList.remove("show")
    }
  }

  if (navbar1 < windowHeight - elementVisible) {
    navbar1.classList.add("scrolled")
  } else {
    navbar1.classList.remove("scrolled")
  }
}

// listen for events
window.addEventListener("load", callbackFunc)
window.addEventListener("resize", callbackFunc)
window.addEventListener("scroll", callbackFunc)

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("main header .h-container ul li a");
const dots = document.querySelectorAll("main .dots .dot");


window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
  var current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((a) => {
    a.classList.remove("nav-active");
    if (a.classList.contains(current)) {
      a.classList.add("nav-active");
    }
  });

  dots.forEach((a) => {
    a.classList.remove("dot-active");
    if (a.classList.contains(current)) {
      a.classList.add("dot-active");
    }
  });
};

/* ------------------------------------------- */

// Get the modal
var modal = document.getElementById("impressumBox")
var modal2 = document.getElementById("datenschutzBox")

// Get the button that opens the modal
var im = document.getElementById("impressum")
var ds = document.getElementById("datenschutz")

// Get the <span> element that closes the modal
var spanIm = document.getElementById("closeIm")
var spanDa = document.getElementById("closeDa")

// When the user clicks the button, open the modal
im.onclick = function () {
  modal.style.display = "block"
  element.classList.toggle("modalOpen")
};
ds.onclick = function () {
  modal2.style.display = "block"
  element.classList.toggle("modalOpen")
};

im.addEventListener("keypress", (event)=> {
  if (event.keyCode === 13) { // key code of the keybord key
    event.preventDefault();
    modal.style.display = "block"
    element.classList.toggle("modalOpen")
  }
});
ds.addEventListener("keypress", (event)=> {
  if (event.keyCode === 13) { // key code of the keybord key
    event.preventDefault();
    modal2.style.display = "block"
    element.classList.toggle("modalOpen")
  }
});

// When the user clicks on <span> (x), close the modal
spanIm.onclick = function () {
  modal.style.display = "none"
  console.log("cliked btn")
  element.classList.remove("modalOpen")
};
spanDa.onclick = function () {
  modal2.style.display = "none"
  element.classList.remove("modalOpen")
};

spanIm.addEventListener("keypress", (event)=> {
  if (event.keyCode === 13) { // key code of the keybord key
    event.preventDefault();
    modal.style.display = "none"
    element.classList.remove("modalOpen")
  }
});

spanDa.addEventListener("keypress", (event)=> {
  if (event.keyCode === 13) { // key code of the keybord key
    event.preventDefault();
    modal2.style.display = "none"
    element.classList.remove("modalOpen")
  }
});



// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
    element.classList.remove("modalOpen")
  }
  if (event.target == modal2) {
    modal2.style.display = "none"
    element.classList.remove("modalOpen")
  }
};



function itemOnClickF(item){
  shareOnFacebook(item)
}
function itemOnClickT(item){
  shareOnTwitter(item)
}
function shareOnFacebook(link){
      const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + link;
      window.open(navUrl , '_blank');
}

function shareOnTwitter(link) {
      const navUrl =
        'https://twitter.com/intent/tweet?text=' + link;
      window.open(navUrl, '_blank');
}

///-------------------------------------------------------

