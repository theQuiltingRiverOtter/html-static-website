let slideIndex =1;
// carousel();


function carousel() {
    const images = document.getElementsByClassName("carousel-image");
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > images.length) {slideIndex = 1}
    images[slideIndex-1].style.display = "block"
    setTimeout(carousel, 2000);
}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



function reveal() {
    const elements = document.querySelectorAll(".reveal");
    for (let i = 0; i < elements.length; i++){
        let windowHeight = window.innerHeight;
        let elementTop = elements[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            elements[i].classList.add("active");
        } else {
            console.log('remove')
            elements[i].classList.remove('active')
        }
    }


}
window.addEventListener("scroll", reveal);
reveal();