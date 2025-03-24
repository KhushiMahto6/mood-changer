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
