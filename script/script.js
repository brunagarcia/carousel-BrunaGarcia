//Creating variables to store html elements.

const carouselWrapper = document.querySelectorAll(".carousel-wrapper");

// const nextControl = document.getElementsByClassName("right-arrow");
const nextControl = document.querySelectorAll(".right-arrow");
const prevControl = document.querySelectorAll(".left-arrow");

let currentImage = carouselWrapper[0].firstElementChild;
let tempNext;

//Logic - All images are contained in a li tag, and they have all absolute
//positioning, so my idea is to change the display mode of the elements based
//on their position as children of my carouselWrapper.


const changeImages = (control) => {
    if (control.screenX < 250) { // LEFT
        currentImage.previousElementSibling !== null ?
        tempNext = currentImage.previousElementSibling :
        currentImage.classList.remove("carousel-item--active")
        tempNext.classList.add("carousel-item--active");

        currentImage = tempNext

    } else if (control.screenX > 250) { //RIGHT
        currentImage.nextElementSibling !== null ?
        tempNext = currentImage.nextElementSibling :
        currentImage.classList.remove("carousel-item--active")
        tempNext.classList.add("carousel-item--active");

        currentImage = tempNext
    }
    


}

// Event Listeners on arrows/control
nextControl[0].addEventListener("click", changeImages);
prevControl[0].addEventListener("click", changeImages);


