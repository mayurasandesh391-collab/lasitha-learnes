// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade animation while scrolling
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if(position < screen - 100){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Initial style
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});

// Contact form message
const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Thank you! Your message has been received. We will contact you soon.");

    form.reset();
});