// Contact form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Show success message
        alert(`پیام شما با موفقیت ارسال شد!

نام: ${data.name}
ایمیل: ${data.email}
شماره تماس: ${data.phone}
واحد: ${contactForm.querySelector('[name="department"] option:checked').text}

به زودی با شما تماس خواهیم گرفت.`);

        // Reset form
        contactForm.reset();

        // In a real application, you would send this data to a server:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Handle success
        // })
        // .catch(error => {
        //     // Handle error
        // });
    });
}

// Form validation animations
const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('invalid', (e) => {
        e.preventDefault();
        input.style.animation = 'shake 0.3s';
        setTimeout(() => {
            input.style.animation = '';
        }, 300);
    });
});

// Add shake animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);
