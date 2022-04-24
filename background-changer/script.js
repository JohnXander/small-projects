// Store button element

const btn = document.getElementById("btn")

// On button click, background color changes to function's return value

btn.addEventListener("click", () => {
    document.body.style.background = randomBg()
});

// When function is called, HSL's hue value randomly changes

function randomBg() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
};