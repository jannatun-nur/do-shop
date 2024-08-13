document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting
    
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    
    const emailValue = emailInput.value.trim(); // Get and trim the email value
    
    if (!validateEmail(emailValue)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block"; // Show the error message
        emailInput.style.borderColor = "red"; // Highlight the input field with red border
    } else {
        emailError.style.display = "none"; // Hide the error message
        emailInput.style.borderColor = "green"; // Highlight the input field with green border
        alert("Thank you for subscribing!");
        // Additional actions such as sending the email to the server can be added here
    }
});

function validateEmail(email) {
    // Basic email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
