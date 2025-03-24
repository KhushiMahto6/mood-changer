<<<<<<< HEAD
const moods = [
    { color: "#ffcccb", text: "You're feeling Love ❤️" },
    { color: "#b3e6ff", text: "You're feeling Calm 🌊" },
    { color: "#ffeb99", text: "You're feeling Happy 😄" },
    { color: "#c1ffc1", text: "You're feeling Fresh 🍃" },
    { color: "#d9b3ff", text: "You're feeling Creative 🎨" }
];

document.getElementById("mood-btn").addEventListener("click", function() {
    let randomMood = moods[Math.floor(Math.random() * moods.length)];
    document.body.style.backgroundColor = randomMood.color;
    document.getElementById("mood-text").textContent = randomMood.text;
});
=======
const moods = [
    { color: "#ffcccb", text: "You're feeling Love ❤️" },
    { color: "#b3e6ff", text: "You're feeling Calm 🌊" },
    { color: "#ffeb99", text: "You're feeling Happy 😄" },
    { color: "#c1ffc1", text: "You're feeling Fresh 🍃" },
    { color: "#d9b3ff", text: "You're feeling Creative 🎨" },
    { color: "#ff9966", text: "You're feeling Energetic ⚡" },
    { color: "#99ccff", text: "You're feeling Focused 🎯" },
    { color: "#d3b3ff", text: "You're feeling Sleepy 😴" },
  { color: "#ffb3b3", text: "You're feeling Motivated 🚀" }
];

document.getElementById("mood-btn").addEventListener("click", function() {
    let randomMood = moods[Math.floor(Math.random() * moods.length)];
    document.body.style.backgroundColor = randomMood.color;
    document.getElementById("mood-text").textContent = randomMood.text;
});
alert("Hello, Khushi! You're learning JavaScript!");
document.getElementById("mood-btn").addEventListener("click", function() {
    let moodText = document.getElementById("mood-text");
    let emojiAnim = document.getElementById("emoji-animation");
    let randomMood = moods[Math.floor(Math.random() * moods.length)];

    moodText.style.opacity = "0"; // Fade out
    emojiAnim.style.opacity = "1"; // Show emoji
    emojiAnim.textContent = randomMood.text.split(" ")[randomMood.text.split(" ").length - 1]; // Get last emoji
    emojiAnim.style.transform = `translateY(-50px) scale(1.5)`; // Move up

    setTimeout(() => {
        document.body.style.backgroundColor = randomMood.color;
        moodText.textContent = randomMood.text;
        moodText.style.opacity = "1"; // Fade in again

        emojiAnim.style.opacity = "0"; // Hide emoji after 1 sec
        emojiAnim.style.transform = `translateY(0) scale(1)`;
    }, 800);
});
const button = document.getElementById("mood-btn");

button.addEventListener("click", function() {
    let randomColor = `hsl(${Math.random() * 360}, 100%, 70%)`; // Random color
    button.style.backgroundColor = randomColor;
});
>>>>>>> 0f32994 (Initial commit)
