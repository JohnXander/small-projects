// Store div and img elements

const container = document.getElementById("container");
const img = document.querySelector("img");

// When cursor moves across div:

container.addEventListener("mousemove", (e) => {

    // X axis = position of cursor offset from the left

    const x = e.clientX - e.target.offsetLeft;

    // Y axis = postion of cursor offset from the top

    const y = e.clientY - e.target.offsetTop;

    // Changes position of image to coordinates above

    img.style.transformOrigin = `${x}px ${y}px`;

    // Resizes image to twice as large

    img.style.transform = "scale(2)";
});

// When cursor leaves the div:

container.addEventListener("mouseleave", () => {

    // Returns position of image to original style

    img.style.transformOrigin = "center center";

    // Returns position of image to original size

    img.style.transform = "scale(1)";
})