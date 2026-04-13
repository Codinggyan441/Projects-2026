// 1. Preloader
window.addEventListener('load', () => {
    const loader = document.getElementById('preloader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1000);
});

// 2. Theme Toggle Logic
const themeBtn = document.getElementById('theme-btn');
const body = document.body;
const icon = themeBtn.querySelector('i');

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

themeBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// 3. Custom Cursor Glow
const glow = document.getElementById('cursor-glow');
window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// 4. Scroll Reveal Intersection Observer
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 5. Parallax Effect for Cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card');
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    cards.forEach(card => {
        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
});

document.querySelector('a[href="#top"]').addEventListener('click', function (e) {
    e.preventDefault(); // Stop the URL from changing
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});