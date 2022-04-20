// Store HTML elements

const btn = document.getElementById("btn");
const container = document.getElementById("container");

// Call function when button is clicked

btn.addEventListener("click", () => {
    createNotification();
});

// Function which creates toast notification:

function createNotification() {

    // Create div element with style and message

    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = "Toast Notification!"

    // Add above element to HTML file

    container.appendChild(notif);

    // The element will disappear after 3 seconds

    setTimeout(() => {
        notif.remove();
    }, 3000)
}