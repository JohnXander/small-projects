// Store input element

const toggle = document.getElementById("toggle");

// When input checked, class toggles between "body" & "body.dark"

toggle.addEventListener("change", (e) => {
    document.body.classList.toggle("dark");
});