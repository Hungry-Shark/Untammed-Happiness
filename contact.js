document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting immediately
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const services = document.getElementById('services').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (fullName === "" || email === "" || services === "") {
        alert('Please fill in the required fields.');
        return;
    }

    // After validation, you can send the form data to a server using AJAX or fetch
    alert('Form submitted successfully!');
});
