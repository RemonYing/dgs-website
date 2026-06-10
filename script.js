function openImage(src){
    document.getElementById("lightbox").style.display="flex";
    document.getElementById("lightbox-img").src=src;
}

function closeImage(){
    document.getElementById("lightbox").style.display="none";
}

let slideIndex = 0;
showSlides();

function showSlides() {

    let slides =
    document.getElementsByClassName("slides");

    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slideIndex++;

    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex-1].style.display="block";

    setTimeout(showSlides,3000);
}

document.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been sent.");

this.reset();

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});
