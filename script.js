document.addEventListener('DOMContentLoaded', function() {
    // Cursor trail effect
    const cursorTrail = document.querySelector('.cursor-trail');
    document.addEventListener('mousemove', (e) => {
        cursorTrail.style.left = e.pageX + 'px';
        cursorTrail.style.top = e.pageY + 'px';
        cursorTrail.style.opacity = '1';
        
        setTimeout(() => {
            cursorTrail.style.opacity = '0';
            cursorTrail.style.transform = 'translate(-50%, -50%) scale(0.5)';
        }, 1000);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
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
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-bar');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const percentage = bar.getAttribute('data-skill');
            bar.style.setProperty('--skill-level', percentage);
            bar.querySelector('span').style.width = percentage;
        });
    }

    // Initialize skill bars after a delay to allow CSS to load
    setTimeout(animateSkillBars, 1000);

    // Project modal functionality
    const projectButtons = document.querySelectorAll('.view-project');
    const modals = document.querySelectorAll('.project-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    projectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = button.getAttribute('data-project');
            const modal = document.getElementById(`project-modal-${projectId}`);
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.project-modal');
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close modal when clicking outside content
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', Object.fromEntries(formData));
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});