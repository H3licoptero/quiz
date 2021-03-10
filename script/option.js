const optionWrapper = document.querySelector(".options__wrapper");
const packageOption = document.querySelector(".package__options");
const img = document.querySelector(".options__title img");
console.log(img);

optionWrapper.addEventListener("click", event => {
    let target = event.target;
    if(target) {
        img.classList.toggle('rotate');
        packageOption.classList.toggle("package__options--active");
    }
})