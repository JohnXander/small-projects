// Store HTML elements

const btn = document.getElementById("btn")
const nav = document.getElementById("nav")

// When button is clicked, a different style is activated for both elements

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
})