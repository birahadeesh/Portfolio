// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
            navLinks.classList.remove('open');
        }
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact form handling for Netlify
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
} 