// Theme Toggle and Mobile Menu functionality remains at top level
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Wrap all other functionality in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Swiper
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });

    // Form Submission (only if form exists)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Tab Functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(targetId) {
        console.log('Switching to tab:', targetId);

        // Hide all tab contents first
        tabContents.forEach(content => {
            content.style.display = 'none';
            content.classList.remove('active');
        });

        // Remove active class from all buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Show selected tab content
        const targetTab = document.getElementById(targetId);
        const targetButton = document.querySelector(`[data-tab="${targetId}"]`);

        if (targetTab && targetButton) {
            targetTab.style.display = 'block';
            void targetTab.offsetHeight; // Force reflow
            targetTab.classList.add('active');
            targetButton.classList.add('active');
            console.log('Tab switched successfully');
        } else {
            console.log('Target tab or button not found');
        }
    }

    // Add click handlers to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = button.getAttribute('data-tab');
            console.log('Tab button clicked:', tabId);
            switchTab(tabId);
        });
    });

    // Initialize first tab
    const firstTabId = tabButtons[0]?.getAttribute('data-tab');
    if (firstTabId) {
        switchTab(firstTabId);
    }

    // Service card click functionality
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', () => {
            const serviceName = card.querySelector('h3').textContent;
            alert(`Would you like to learn more about our ${serviceName} service? Please contact us for detailed information.`);
        });
    });
}); 