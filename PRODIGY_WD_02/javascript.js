var timeDisplay = document.getElementById("timeDisplay");
var startBtn = document.getElementById("start");
var lapBtn = document.getElementById("lap");
var pauseBtn = document.getElementById("pause");
var resetBtn = document.getElementById("reset");
var lapList = document.getElementById("lapList"); // Change to get the parent for laps

let totalSeconds = 0;
let interval = null;
let lapCounter = 0;

startBtn.addEventListener("click", start);
lapBtn.addEventListener("click", lap);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

function timer() {
    totalSeconds++; // Increment by 1 second

    let hrs = Math.floor(totalSeconds / 3600); // Calculate hours
    let mins = Math.floor((totalSeconds % 3600) / 60); // Calculate minutes
    let secs = totalSeconds % 60; // Calculate seconds

    // Pad with zeros
    if (secs < 10) secs = '0' + secs; 
    if (mins < 10) mins = '0' + mins; 
    if (hrs < 10) hrs = '0' + hrs; 

    timeDisplay.innerHTML = `${hrs}:${mins}:${secs}`; // Display time
}

function start() {
    if (interval) return; // Prevent multiple intervals
    interval = setInterval(timer, 1000); // Update every second
}

function lap() {
    lapCounter++;
    let lapTime = timeDisplay.innerHTML; // Get the current time
    let lapElement = document.createElement('h4'); // Create new lap element
    lapElement.innerHTML = "Lap " + lapCounter + ": " + lapTime; // Set lap text
    lapList.prepend(lapElement); // Add new lap at the top
}

function pause() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    pause(); // Stop the timer
    totalSeconds = 0; // Reset total seconds
    lapCounter = 0; // Reset lap count
    timeDisplay.innerHTML = "00:00:00"; // Reset display
    lapList.innerHTML = ""; // Clear lap display
}
