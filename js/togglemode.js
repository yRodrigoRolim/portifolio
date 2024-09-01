const checkbox = document.getElementById('togglemode');

let mode = localStorage.getItem('mode') === 'true';

document.addEventListener('DOMContentLoaded', function() {
    window.scroll(0, 0);
    if (mode) {
        checkbox.checked = true; 
        console.log("its a true");
    }
    togglemode();
});

checkbox.addEventListener('change', function () {
    togglemode();
});

function togglemode() {
    const animationBackground = document.querySelectorAll(".trade-mode-background");
    const animationText = document.querySelectorAll(".trade-mode-text");
    const animationBgDetails = document.querySelectorAll(".trade-mode-bg-details");

    // background
    animationBackground.forEach(function (div) {
        div.classList.toggle("background-light", !checkbox.checked);
        div.classList.toggle("background-dark", checkbox.checked);
    });

    animationBgDetails.forEach(function (div) {
        div.classList.toggle("bg-details-light", !checkbox.checked);
        div.classList.toggle("bg-details-dark", checkbox.checked);
    });

    animationText.forEach(function (div) {
        div.classList.toggle("text-dark", !checkbox.checked);
        div.classList.toggle("text-light", checkbox.checked);
    });

    // color
    localStorage.setItem('mode', checkbox.checked);
}
