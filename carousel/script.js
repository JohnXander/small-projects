// Store image container DIV

const imgs = document.getElementById("imgs");

// Store all images inside image container DIV

const img = document.querySelectorAll("#imgs img")

// Set index value to 0

let idx = 0

// Function to run carousel:

function runCarousel() {

    // When function is called, index increments by 1

    idx++;

    // When index is greater than number of images, index resets

    if (idx > img.length - 1) {
        idx = 0
    }

    // Moves image to the left by {current index x 500} pixels

    imgs.style.transform = `translateX(${-idx * 500}px)`;

}

// Runs function every 2 seconds

setInterval(runCarousel, 2000);