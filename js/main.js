/* ==========================================================================
   KORE HOMES & INVESTMENT - MAIN JAVASCRIPT (main.js)
   Navigation Toggle, Smooth Interactions, and UI Enhancements
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Kore Homes & Investment website initialized successfully.");

    // ==========================================
    // 1. Mobile Menu Toggle Functionality
    // ==========================================
    const mobileMenuButton = document.querySelector('header button');
    
    if (mobileMenuButton) {
        // Create a mobile navigation drawer element dynamically if it doesn't exist
        const headerNav = document.querySelector('header nav');
        
        if (headerNav) {
            // Clone the navigation items for mobile view
            const mobileMenuOverlay = document.createElement('div');
            mobileMenuOverlay.className = 'fixed inset-0 bg-navy-950/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center space-y-8 p-6 hidden transition-all duration-300 opacity-0';
            
            const closeBtn = document.createElement('button');
            closeBtn.className = 'absolute top-6 right-6 text-slate-400 hover:text-white text-2xl font-bold focus:outline-none';
            closeBtn.innerHTML = '&times;';
            
            const navLinksClone = headerNav.cloneNode(true);
            navLinksClone.className = 'flex flex-col items-center space-y-6 text-lg font-semibold text-slate-200';
            
            // Add CTA button to mobile menu
            const ctaBtn = document.createElement('a');
            ctaBtn.href = 'contact.html';
            ctaBtn.className = 'px-8 py-3 rounded-xl bg-emerald-500 text-slate-900 font-bold shadow-lg shadow-emerald-500/30';
            ctaBtn.textContent = 'Book Consultation';

            mobileMenuOverlay.appendChild(closeBtn);
            mobileMenuOverlay.appendChild(navLinksClone);
            mobileMenuOverlay.appendChild(ctaBtn);
            document.body.appendChild(mobileMenuOverlay);

            // Toggle Open
            mobileMenuButton.addEventListener('click', () => {
                mobileMenuOverlay.classList.remove('hidden');
                setTimeout(() => {
                    mobileMenuOverlay.classList.remove('opacity-0');
                }, 10);
            });

            // Toggle Close
            closeBtn.addEventListener('click', () => {
                mobileMenuOverlay.classList.add('opacity-0');
                setTimeout(() => {
                    mobileMenuOverlay.classList.add('hidden');
                }, 300);
            });

            // Close menu when clicking any nav link inside mobile view
            mobileMenuOverlay.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenuOverlay.classList.add('opacity-0');
                    setTimeout(() => {
                        mobileMenuOverlay.classList.add('hidden');
                    }, 300);
                });
            });
        }
    }

    // ==========================================
    // 2. Form Validation Feedback (for contact.html)
    // ==========================================
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple submission feedback animation
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending Message...';
                submitBtn.disabled = true;
                submitBtn.classList.add('opacity-75', 'cursor-not-allowed');

                setTimeout(() => {
                    submitBtn.textContent = 'Message Sent Successfully!';
                    submitBtn.classList.remove('bg-emerald-500', 'hover:bg-emerald-400');
                    submitBtn.classList.add('bg-gold-500', 'text-slate-900');
                    
                    // Reset form after a brief delay
                    setTimeout(() => {
                        contactForm.reset();
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.classList.remove('opacity-75', 'cursor-not-allowed', 'bg-gold-500');
                        submitBtn.classList.add('bg-emerald-500', 'hover:bg-emerald-400');
                    }, 3000);
                }, 1200);
            }
        });
    }

    // ==========================================
    // 3. Smooth Scroll Enhancement for Anchor Links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});