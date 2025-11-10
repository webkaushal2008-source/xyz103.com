document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sticky header on scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            header.style.padding = '15px 0';
        } else {
            header.style.background = 'var(--white)';
            header.style.boxShadow = 'var(--box-shadow)';
            header.style.padding = '20px 0';
        }
    });
    
    // Book card hover effect
    const bookCards = document.querySelectorAll('.book-card');
    
    bookCards.forEach(card => {
        const cover = card.querySelector('.book-cover');
        const info = card.querySelector('.book-info');
        
        card.addEventListener('mouseenter', () => {
            cover.style.transform = 'translateY(-10px)';
            info.style.transform = 'translateY(10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            cover.style.transform = 'translateY(0)';
            info.style.transform = 'translateY(0)';
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show a success message
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
            
            // Reset form
            this.reset();
        });
    }
    
    // Scroll reveal animation
    const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });
    
    scrollReveal.reveal('.hero-content, .hero-image', { interval: 100 });
    scrollReveal.reveal('.about-image, .about-content', { interval: 100 });
    scrollReveal.reveal('.book-card', { interval: 100 });
    scrollReveal.reveal('.blog-post', { interval: 100 });
    scrollReveal.reveal('.contact-content, .contact-image', { interval: 100 });
}
);
    document.addEventListener
    ("contextmenu", function(e)
    {
        e.preventDefault()
    },false)