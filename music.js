// ===== BACKGROUND MUSIC PLAYLIST (RANDOM START) =====

const playlist = [
    "PapajiTheme1.mp3",
    "PapajiTheme2.mp3",
    "PapajiTheme3.mp3",
    "PapajiTheme4.mp3"
];

// Start with a RANDOM track on every refresh
let trackIndex = Math.floor(Math.random() * playlist.length);

const bgMusic = document.getElementById("bgMusic");

function playTrack() {
    if (!bgMusic) return;

    bgMusic.src = playlist[trackIndex];
    bgMusic.volume = 0.6;

    bgMusic.play().catch(() => {
        // Autoplay blocked by browser
    });
}

// Play next song in order
bgMusic.addEventListener("ended", () => {
    trackIndex = (trackIndex + 1) % playlist.length;
    playTrack();
});

// Try autoplay on page load
window.addEventListener("load", () => {
    playTrack();
});

// Fallback: start music on first interaction
document.addEventListener("click", () => {
    if (bgMusic.paused) {
        playTrack();
    }
}, { once: true });
