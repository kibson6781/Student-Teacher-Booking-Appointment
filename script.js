document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;
    const message = document.getElementById('message').value;

    // Display a confirmation message
    document.getElementById('appointment-form').style.display = 'none';
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.style.display = 'block';

    // You can also send the data to a server or an email using AJAX or any server-side technology here
    console.log({
        name: name,
        email: email,
        appointmentDate: appointmentDate,
        appointmentTime: appointmentTime,
        message: message
    });

    // Example: sending an email using a backend service like EmailJS (optional)
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        name: name,
        email: email,
        appointment_date: appointmentDate,
        appointment_time: appointmentTime,
        message: message
    }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
    */
});
