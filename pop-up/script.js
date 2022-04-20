// Store the HTML elements

const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("container");

// Style changes to popup-container.active which displays the element

open.addEventListener("click", () => {
    container.classList.add("active");
});

// Style changes back to popup-container which displays nothing

close.addEventListener("click", () => {
    container.classList.remove("active");
});
