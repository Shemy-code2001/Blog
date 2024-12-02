document.addEventListener('DOMContentLoaded', () => {
            new Typed('#typed-output', {
                strings: [
                    'Explore Tech Frontiers', 
                    'Innovate Continuously', 
                    'Transform Digital Landscapes'
                ],
                typeSpeed: 100,
                backSpeed: 50,
                loop: true
            });
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            const closeMenu = document.getElementById('close-menu');
            const mobileMenuLinks = document.querySelectorAll('.mobile-nav-links a');

            menuToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileMenu.classList.add('active');
            });
            closeMenu.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });

            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                });
            });
            document.addEventListener('click', (e) => {
                if (mobileMenu.classList.contains('active') && 
                    !mobileMenu.contains(e.target) && 
                    e.target !== menuToggle) {
                    mobileMenu.classList.remove('active');
                }
            });
            mobileMenu.addEventListener('click', (e) => {
                e.stopPropagation();
            });
            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                    mobileMenu.classList.remove('active');
                });
            });
            gsap.from('.hero-section', {
                duration: 1, 
                opacity: 0, 
                y: -50, 
                ease: 'power3.out'
            });

            gsap.from('.interactive-card', {
                duration: 1,
                opacity: 0,
                y: 50,
                stagger: 0.2,
                ease: 'power3.out'
            });
        });