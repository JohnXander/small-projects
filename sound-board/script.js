// Names of sounds stored in array

const sounds = ["alarm", "chicken", "clock", "gunfire", "laugh"];

// Loop through sounds:

sounds.forEach(sound => {

    //Create button and CSS class for each sound

    const btn = document.createElement("button");
    btn.classList.add("btn");

    // Button contains capitalised name of each sound

    btn.innerText = sound[0].toUpperCase() + sound.substring(1);

    // On click, any previous sounds stop and current sound starts
    
    btn.addEventListener("click", () => {
        stopSongs();
        document.getElementById(sound).play();
    })

    // Add all of above elements to DOM

    document.body.appendChild(btn)
});

// This function pauses all sounds

function stopSongs() {
    sounds.forEach(sound => {
        document.getElementById(sound).pause();
    });
};

