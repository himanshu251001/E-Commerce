const form = document.getElementById('customer-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    if (name === '' || email === '' || address === '' || phone === '') {
        alert('Please fill in all fields');
    } else {
        alert('Form submitted successfully');
        form.reset();
    }
}
