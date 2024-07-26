

document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');
    const sections = document.querySelectorAll('section:not(.hero)');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Apply animation to the hero content
    gsap.to(".hero-content", { duration: 1, opacity: 1, y: 0 });
    gsap.to(".hero-content h1", { duration: 1, opacity: 1, y: 0, delay: 0.5 });
    gsap.to(".hero-content p", { duration: 1, opacity: 1, y: 0, delay: 1 });
});
