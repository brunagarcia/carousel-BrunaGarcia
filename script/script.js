//Creating variables to store html elements.

const carouselWrapper = document.querySelectorAll(".carousel-wrapper");

// const nextControl = document.getElementsByClassName("right-arrow");
const nextControl = document.querySelectorAll(".right-arrow");
const prevControl = document.querySelectorAll(".left-arrow");

let currentImage = carouselWrapper[0].firstElementChild;


//Logic - All images are contained in a li tag, and they have all absolute
//positioning, so my idea is to change the display mode of the elements based
//on their position as children of my carouselWrapper.

const changeImages = (control) => {
    let tempNext = "";

    if (control.screenX < 250) {
        currentImage.classList.remove("carousel-item--active");
        tempNext = currentImage.previousElementSibling;
        currentImage.previousElementSibling.classList.add("carousel-item--active");
    } else if (control.screenX > 250) {
        currentImage.classList.remove("carousel-item--active");
        tempNext = currentImage.nextElementSibling;
        currentImage.nextElementSibling.classList.add("carousel-item--active");
    }

    //Re-assigning currentImage to the next sibling.
    !tempNext ?
        currentImage = carouselWrapper[0].firstElementChild :
        currentImage = tempNext;
}

// Event Listeners on arrows/control
nextControl[0].addEventListener("click", changeImages);
prevControl[0].addEventListener("click", changeImages);


