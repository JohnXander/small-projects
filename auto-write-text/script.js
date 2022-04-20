// Store the sentence

const text = "This is my auto write text sentence!";

// Store index value to use for incrementation

let index = 0;

// Main function:

function writeText() {

    // Add sentence to HTML body (from index 0 to the value of index value)

    document.body.innerText = text.slice(0, index);

    // Each time the function is called, the index value increments by 1

    index++;

    // When index value is more than sentence length, everything resets

    if (index > text.length) {
        index = 0
    }
}

// Call function every tenth of a second

setInterval(writeText, 100);