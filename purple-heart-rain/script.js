// Function to create heart:

function createHeart() {

    // Create & store DIV element with style

    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Each time function is called, position on X axis randomly changes

    heart.style.left = Math.random() * 100 + "vw";

    // Each time function is called, speed of animation randomly changes

    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    // Content of DIV element:

    heart.innerText = "💜";

    // Add DIV element to HTML file

    document.body.appendChild(heart);

    // After 5 seconds, DIV element will disappear

    setTimeout(() => {
        heart.remove();
    }, 5000);
};

// Function is called every 300 milliseconds

setInterval(createHeart, 300);