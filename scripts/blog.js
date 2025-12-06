// Blog category filter
const categoryBtns = document.querySelectorAll('.category-btn');
const blogCards = document.querySelectorAll('.blog-card');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const category = btn.textContent.trim();
        
        // Filter blog posts (in a real app, this would filter the actual data)
        // For now, we'll just add a simple animation
        blogCards.forEach((card, index) => {
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s forwards`;
            }, 10);
        });
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        alert(`ممنون از عضویت شما! ایمیل ${email} با موفقیت ثبت شد.`);
        newsletterForm.reset();
    });
}
