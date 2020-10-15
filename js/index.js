

/*******slide-image ***/
const slideImage = document.querySelectorAll(".slide-image")
const slidesContainer = document.querySelector(".slides-container");
const navigationDots = document.querySelector(".navigation-dots");
 

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

var index=0;
function goright(){
  if(index == slideImage.length-1) index=0;
  else index++;
  slidesContainer.style.transform = "translateX(-" + slideWidth*index + "px)";
  currentSlide = index;
  setActiveClass()
}
setInterval(goright ,1000);

function init(){
   /*
   slideImage[0] = 0;
   slideImage[1] = 100%;
   slideImage[2] = 200%
   */

   slideImage.forEach((img,i) => {
     img.style.left = i * 100 +"%";
   });

   slideImage[0].classList.add("active");
   
   createNavigationDots();
}
init();

//create navigations dots
function createNavigationDots() {
  for(let i = 0;i < numberOfImages;i++ ){
    const dot = document.createElement("div");
    dot.classList.add("single-dot");
    navigationDots.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide(i);
    });
  }
  navigationDots.children[0].classList.add("active")
}

//Go To Slide

function goToSlide(slideNumber){
  slidesContainer.style.transform = "translateX(-" + slideWidth*slideNumber + "px)";
  currentSlide = slideNumber;
  setActiveClass();
}

//Set Active Class
function setActiveClass() {
  //set Active class for Slide Image

  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

  //set Active class for navigation dots

  let currentDot = document.querySelector(".single-dot.active")
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");

}