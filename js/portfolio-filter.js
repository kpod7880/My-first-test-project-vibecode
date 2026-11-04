/* ==========================================================================
   KORE HOMES & INVESTMENT - PORTFOLIO FILTER (portfolio-filter.js)
   Category Filtering and Interactive Project Gallery Management
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio filter script initialized successfully.");

    // Select all filter buttons and portfolio grid items
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length > 0 && portfolioItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active styling from all buttons
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-emerald-500', 'text-slate-900', 'shadow-lg');
                    btn.classList.add('bg-slate-800', 'text-slate-300', 'hover:bg-slate-700');
                });

                // Add active styling to clicked button
                button.classList.remove('bg-slate-800', 'text-slate-300', 'hover:bg-slate-700');
                button.classList.add('bg-emerald-500', 'text-slate-900', 'shadow-lg');

                const filterValue = button.getAttribute('data-filter');

                // Filter portfolio items based on category
                portfolioItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');

                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
});