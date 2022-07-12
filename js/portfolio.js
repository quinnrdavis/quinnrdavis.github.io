//functions to open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//show the first image when the page is loaded
var slideIndex = 1;
showSlides(slideIndex);

//change slide when the arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//change slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    //create array of slides
    var slides = document.getElementsByClassName("mySlides");
    //create array of dots
    var dots = document.getElementsByClassName("dot");

    //when attempting to go past last slide or before first slide, wrap around to other end of array
    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };

    //hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //remove "active" from the class of each dot
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //display only the selected slide
    slides[slideIndex - 1].style.display = "block";
    //make only the selected dot active
    dots[slideIndex - 1].className += " active";
}

//if clicking on the cancel button or anywhere that doesn't have the contact class, close the form
document.addEventListener("click", function (event) {
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
        closeForm()
    }
}, false);