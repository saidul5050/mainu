// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
gsap.from('.hero-section h1', {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.2
});

gsap.from('.hero-section h2', {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.4
});

gsap.from('.hero-section p', {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.6
});

gsap.from('.hero-3d-element', {
    duration: 1,
    x: 30,
    opacity: 0,
    delay: 0.8
});


// Skills Section Animations
gsap.from('.section-title', {
    scrollTrigger: {
        trigger: '.section-title',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 30,
    opacity: 0
});

gsap.from('.section-subtitle', {
    scrollTrigger: {
        trigger: '.section-subtitle',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.2
});

gsap.from('.skill-card', {
    scrollTrigger: {
        trigger: '.skill-card',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2
});

// Certificate Cards Animation
gsap.from('.certificate-card', {
    scrollTrigger: {
        trigger: '.certificates-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2
});

// Process Items Animation
gsap.from('.process-item', {
    scrollTrigger: {
        trigger: '.process-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.3
});

// 3D Card Tilt Effect
document.querySelectorAll('.certificate-card, .process-content').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = -(x - centerX) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Portfolio View More functionality
const viewMoreBtn = document.getElementById('viewMoreBtn');
const portfolioOverlay = document.getElementById('portfolioOverlay');
const overlayGrid = document.querySelector('.overlay-grid');
const closeOverlay = document.querySelector('.close-overlay');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Clone all portfolio items to overlay
function initializeOverlay() {
    overlayGrid.innerHTML = ''; // Clear existing content
    
    portfolioItems.forEach(item => {
        const clone = item.cloneNode(true);
        clone.classList.add('overlay-item');
        overlayGrid.appendChild(clone);
    });
}

// Initialize overlay on page load
initializeOverlay();

// View More button click handler
viewMoreBtn.addEventListener('click', () => {
    portfolioOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    gsap.from('.overlay-grid .portfolio-card', {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
    });
});

// Close overlay handlers
closeOverlay.addEventListener('click', () => {
    portfolioOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === portfolioOverlay) {
        portfolioOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
        // Simulating server response
        await new Promise(resolve => setTimeout(resolve, 2000));
        showNotification('Message sent successfully!', 'success');
        contactForm.reset();
    } catch (error) {
        showNotification('Failed to send message. Please try again.', 'error');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Notification System
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    gsap.to(notification, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
    });

    setTimeout(() => {
        gsap.to(notification, {
            duration: 0.5,
            opacity: 0,
            y: -100,
            ease: 'power2.in',
            onComplete: () => notification.remove()
        });
    }, 3000);
}

// Contact Section Animations
gsap.from('.contact-info', {
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: -50,
    opacity: 0
});

gsap.from('.contact-form-wrapper', {
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: 50,
    opacity: 0
});

// Social Links Animation
gsap.from('.social-link', {
    scrollTrigger: {
        trigger: '.social-links',
        start: 'top 90%'
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Initialize EmailJS with your user ID
emailjs.init("1UAfqj3h4Lz11E7oN"); // Replace with your EmailJS user ID

const contact_Form = document.getElementById('contactForm');
const submitBtn = contact_Form.querySelector('button[type="submit"]');

contact_Form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!contact_Form.checkValidity()) {
        contact_Form.classList.add('was-validated');
        return;
    }

    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
        // Prepare template parameters
        const templateParams = {
            to_email: 'mainu50@outlook.com',
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Send email using EmailJS
        await emailjs.send(
            'service_f7gfnw7', // Replace with your EmailJS service ID
            'template_65jny8r', // Replace with your EmailJS template ID
            templateParams
        );

        // Show success message
        showNotification('Message sent successfully!', 'success');
        contact_Form.reset();
        contact_Form.classList.remove('was-validated');
    } catch (error) {
        // Show error message
        showNotification('Failed to send message. Please try again.', 'error');
        console.error('Email error:', error);
    } finally {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

