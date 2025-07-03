document.addEventListener('DOMContentLoaded', function () {
    const bookBtn = document.getElementById('book-room-btn');
    if (bookBtn) {
        bookBtn.addEventListener('click', function (e) {
            e.preventDefault();

            const name = document.getElementById('customer-name');
            const email = document.getElementById('customer-email');
            const date = document.getElementById('booking-date');
            const errorDiv = document.getElementById('booking-errors');

            let errors = [];

            // Basic validation
            if (!name.value.trim()) {
                errors.push('Name is required.');
            }
            if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
                errors.push('Valid email is required.');
            }
            if (!date.value) {
                errors.push('Booking date is required.');
            }

            // Display errors or submit form
            if (errors.length > 0) {
                errorDiv.innerHTML = errors.join('<br>');
                errorDiv.style.display = 'block';
            } else {
                errorDiv.style.display = 'none';
                bookBtn.closest('form').submit();
            }
        });
    }
});