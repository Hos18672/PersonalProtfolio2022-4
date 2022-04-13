const switchButton = document.getElementById('switch')
var container = document.querySelector("#nav-list-container")
var container2 = document.querySelector("#nav-list-container1")
var container1 = document.querySelector("#hamburger-icon")
var bars = container1.querySelectorAll(".bar1 , .bar2, .bar3")
var LandingArrow = document.getElementById('arrow-down')
var aboutArrow = document.getElementById('arrow-down2')
var aboutSpan = document.getElementById('about-span')

switchButton.addEventListener('click',() =>{
        var element = document.body;
        element.classList.toggle("dark-mode")
        var items = container.querySelectorAll(".nav-a-item , .nav-a-item1 , .nav-a-item2 , .nav-a-item3 , .nav-a-item4")
        items.forEach(item => item.classList.toggle("dark-mode"))
        var items1 = container2.querySelectorAll(".nav-a-item , .nav-a-item1 , .nav-a-item2 , .nav-a-item3 , .nav-a-item4")
        items1.forEach(item => item.classList.toggle("nav2-items-dark-mode"))
        bars.forEach(i =>i.classList.toggle("hamburger-dark-mode"))
        LandingArrow.classList.toggle("dark-arrow-down")
        aboutArrow.classList.toggle("dark-arrow-down2")
        aboutSpan.classList.toggle("dark-span")
})

function toggleButton(menu){
        menu.classList.toggle("open")
}
var con = document.getElementById("nav-list-container")
var it = con.getElementsByClassName("nav-item")

for (var i = 0; i < it.length; i++){
        it[i].addEventListener("click", function(){
                var current = document.getElementsByClassName("active")
                current[0].className = current[0].className.replace("active")
                this.className += "active"
        })
}


//--------- Scroll Animation -----------------
var items = document.querySelectorAll("li");

function isItemInView(item){
  var rect = item.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isItemInView(items[i])) {
        items[i].classList.add("show");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

