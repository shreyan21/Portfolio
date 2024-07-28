document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');
    const sections = document.querySelectorAll('section:not(.hero)');

    // Create an Intersection Observer instance for sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });

    // Apply GSAP animations to the hero content
    gsap.fromTo(".hero-content", { opacity: 0, y: -50 }, { duration: 1, opacity: 1, y: 0 });
    gsap.fromTo(".hero-content h1", { opacity: 0, y: -50 }, { duration: 1, opacity: 1, y: 0, delay: 0.5 });
    gsap.fromTo(".hero-content p", { opacity: 0, y: -50 }, { duration: 1, opacity: 1, y: 0, delay: 1 });
    gsap.fromTo(".hero-content .btn", { opacity: 0, scale: 0.5 }, { duration: 1, opacity: 1, scale: 1, delay: 1.5, ease: "back.out(1.7)" });


window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

})



// Navbar scroll effect
window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
});

