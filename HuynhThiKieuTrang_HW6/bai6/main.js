const next = document.querySelector('.next');
const before = document.querySelector('.before');

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let round = document.querySelectorAll(".round_item");
    if (n > round.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = round.length }
    for (i = 0; i < round.length; i++) {
        round[i].classList.add("hide");
    }
    round[slideIndex - 1].classList.remove("hide");
}
