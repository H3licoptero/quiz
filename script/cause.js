const paragraph = document.querySelectorAll(".cause__paragraph");
const figure = document.querySelectorAll(".cause__figure");
const plateText = document.querySelectorAll(".cause__plate-text");

paragraph.forEach((el, i) => {
    el.addEventListener("click", event => {
        let target = event.target;
        if(target.closest(".cause__paragraph")) {
            figure[i].classList.add("cause__figure--active");
            el.classList.add("hide");
        }
    })
});

plateText.forEach((el, i) => {
    el.addEventListener("click", event => {
        let target = event.target;
        if(target.closest(".cause__plate-text")) {
            el.parentNode.parentNode.parentNode.childNodes[1].classList.remove("hide");
            figure[i].classList.remove("cause__figure--active");
        }
    })
})