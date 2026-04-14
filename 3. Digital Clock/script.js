// Store user preferences for theme and time format.
const STORAGE_KEYS = {
    THEME: "clock_theme",
    FORMAT: "clock_format"
};

const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const formatToggle = document.getElementById("formatToggle");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const dayNameEl = document.getElementById("dayName");
const dateTextEl = document.getElementById("dateText");

let use24Hour = true;
let lastValues = { h: "", m: "", s: "" };

function applyTheme(theme) {
    const isLight = theme === "light";
    body.classList.toggle("light", isLight);
    themeToggle.textContent = isLight ? "☀️ Light" : "🌙 Dark";
}

function animateChange(element, newValue, key) {
    if (lastValues[key] === newValue) return;
    element.textContent = newValue;
    element.classList.remove("digit-change");
    void element.offsetWidth;
    element.classList.add("digit-change");
    lastValues[key] = newValue;
}

function formatDate(now) {
    const dayName = now.toLocaleDateString(undefined, { weekday: "long" });
    const dateText = now.toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    dayNameEl.textContent = dayName;
    dateTextEl.textContent = dateText;
}

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    let ampm = "";

    if (!use24Hour) {
        ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
    }

    const hourText = String(hours).padStart(2, "0");

    animateChange(hoursEl, hourText, "h");
    animateChange(minutesEl, minutes, "m");
    animateChange(secondsEl, seconds, "s");

    ampmEl.textContent = ampm;
    formatDate(now);
}

function setFormatButtonText() {
    formatToggle.textContent = use24Hour ? "24H" : "12H";
}

function initPreferences() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    const savedFormat = localStorage.getItem(STORAGE_KEYS.FORMAT);

    applyTheme(savedTheme === "light" ? "light" : "dark");
    use24Hour = savedFormat === "12" ? false : true;
    setFormatButtonText();
}

themeToggle.addEventListener("click", () => {
    const nextTheme = body.classList.contains("light") ? "dark" : "light";
    applyTheme(nextTheme);
    localStorage.setItem(STORAGE_KEYS.THEME, nextTheme);
});

formatToggle.addEventListener("click", () => {
    use24Hour = !use24Hour;
    localStorage.setItem(STORAGE_KEYS.FORMAT, use24Hour ? "24" : "12");
    setFormatButtonText();
    // Refresh instantly on toggle instead of waiting for the next second.
    updateClock();
});

initPreferences();
updateClock();
setInterval(updateClock, 1000);