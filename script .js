// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ===== TYPED TEXT EFFECT =====
const texts = ['Full Stack Developer', 'Vue.js Developer', 'Node.js Developer', 'React Developer'];
let textIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.querySelector('.typed');

function type() {
    const current = texts[textIndex];
    if (isDeleting) {
        typedEl.textContent = current.substring(0, charIndex--);
        if (charIndex < 0) { isDeleting = false; textIndex = (textIndex + 1) % texts.length; setTimeout(type, 400); return; }
    } else {
        typedEl.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) { isDeleting = true; setTimeout(type, 1500); return; }
    }
    setTimeout(type, isDeleting ? 60 : 100);
}
type();

// ===== AOS SCROLL ANIMATIONS =====
function initAOS() {
    const elements = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                setTimeout(() => entry.target.classList.add('aos-animate'), parseInt(delay));
            }
        });
    }, { threshold: 0.1 });
    elements.forEach(el => observer.observe(el));
}
initAOS();

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
    });
    navItems.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--blue)' : '';
    });
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    btn.textContent = '✅ Message Sent!';
    btn.style.background = 'linear-gradient(135deg, #065f46, #059669)';
    setTimeout(() => {
        btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        btn.style.background = '';
        this.reset();
    }, 3000);
});
