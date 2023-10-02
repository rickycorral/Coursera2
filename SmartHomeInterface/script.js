// Get the current temperature display element
const currentTempElement = document.getElementById("currentTemp");

// Initial temperature value
let currentTemperature = 20; // Starting temperature at 20°C

// Function to update the temperature display
function updateTemperatureDisplay() {
    currentTempElement.textContent = currentTemperature + "°C";
}

// Event listener for the "Increase Temperature" button
document.getElementById("increaseTemp").addEventListener("click", function () {
    // Increase the temperature by 1 degree
    currentTemperature++;
    updateTemperatureDisplay();
});

// Event listener for the "Decrease Temperature" button
document.getElementById("decreaseTemp").addEventListener("click", function () {
    // Decrease the temperature by 1 degree
    currentTemperature--;
    updateTemperatureDisplay();
});

// Initial update of the temperature display
updateTemperatureDisplay();

// Get elements for music control
const playButton = document.getElementById("playPause");
const pauseButton = document.getElementById("pauseMusic");
const stopButton = document.getElementById("stopMusic");
const nextButton = document.getElementById("nextTrack");
const songNameDisplay = document.getElementById("songDisplay");

// Define an array of funny song names
const funnySongs = [
    "The Chicken Polka",
    "Banana Phone",
    "The Duck Song",
    "The Llama Song",
    "The Badger Song",
    "Shoes",
    "Hamster Dance",
    "Charlie Bit My Finger",
];
let isPlaying = false;
let currentSongIndex = 0; // Initialize to -1 to start with no song

// Function to play a random funny song
function playRandomSong() {
    currentSongIndex = Math.floor(Math.random() * funnySongs.length);
    songDisplay.textContent = funnySongs[currentSongIndex];
}

// Event listener for the "Play" button
document.getElementById('playPause').addEventListener('click', () => {
    if (!isPlaying) {
        isPlaying = true;
        songDisplay.textContent = funnySongs[currentSongIndex];
        document.getElementById('playPause').innerHTML = '<i class="fas fa-pause"></i> Pause';
    } else {
        isPlaying = false;
        document.getElementById('playPause').innerHTML = '<i class="fas fa-play"></i> Play';
    }
});


// Event listener for the "Stop" button (not implemented)
stopButton.addEventListener("click", function () {
    // You can implement stop functionality here if needed
    songDisplay.textContent = ""; 
    document.getElementById('playPause').innerHTML = '<i class="fas fa-play"></i> Play';
});

// Event listener for the "Next" button
nextButton.addEventListener("click", function () {
    if (currentSongIndex === -1) {
        // If no song is currently playing, play a random song
        playRandomSong();
    } else {
        // Play the next random song
        let newIndex = currentSongIndex;
        while (newIndex === currentSongIndex) {
            newIndex = Math.floor(Math.random() * funnySongs.length);
        }
        currentSongIndex = newIndex;
        songDisplay.textContent = funnySongs[currentSongIndex];
    }
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(function(error) {
        console.error('Service Worker registration failed:', error);
      });
  }
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the default browser install prompt
    e.preventDefault();
    // Store the event for later use
    deferredPrompt = e;
    // Show your custom install button
    showInstallButton();
  });
    