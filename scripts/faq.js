// FAQ Accordion functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question, index) => {
    // Open first FAQ by default
    if (index === 0) {
        question.parentElement.classList.add('active');
    }

    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Search functionality
const searchInput = document.getElementById('faqSearch');
const faqItems = document.querySelectorAll('.faq-item');
const faqCategories = document.querySelectorAll('.faq-category');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        faqCategories.forEach(category => {
            let hasVisibleItems = false;
            const items = category.querySelectorAll('.faq-item');

            items.forEach(item => {
                const question = item.querySelector('.faq-question span').textContent.toLowerCase();
                const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();

                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    item.style.display = 'block';
                    hasVisibleItems = true;

                    // Highlight search term (optional enhancement)
                    if (searchTerm) {
                        item.classList.add('active');
                    }
                } else {
                    item.style.display = 'none';
                }
            });

            // Hide category if no visible items
            if (hasVisibleItems || searchTerm === '') {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        });
    });
}
