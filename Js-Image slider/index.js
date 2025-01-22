

const slides=document.querySelectorAll(".slides img");
let slideIndex=0;
let IntervalId=null;

//1. display the first image

// initializeSlider();
document.addEventListener("DOMContentLoaded",initializeSlider);

function initializeSlider(){
    slides[slideIndex].classList.add("displaySlide");
    IntervalId=setInterval(nextSlide,3000);
    // console.log(IntervalId); //1   
}
function showSlide(){

    if(slideIndex>=slides.length){
        slideIndex=0;
    }
    else if(slideIndex<0){
       slideIndex=slides.length-1;  //repeat
    }

    slides.forEach(slide=>{
        slide.classList.remove("displaySlide");
    })
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(IntervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
