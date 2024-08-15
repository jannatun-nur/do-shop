document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    
    const emailValue = emailInput.value.trim(); 
    
    if (!validateEmail(emailValue)) {
        
        emailInput.value = "";
        Swal.fire({
            title: "Oh nooooo!!!",
            text: "Please enter a valid email address.",
            icon: "error",
            confirmButtonText: "Try Again",
            willClose: () => {
                emailInput.focus(); 
            }
        });
        
        emailError.textContent = "";
        emailError.style.display = "none";
        emailInput.style.borderColor = "red";
    } else {
        emailError.style.display = "none";
        Swal.fire({
            title: "Good job!",
            text: "Your email has been submitted successfully!",
            icon: "success",
            confirmButtonText: "OK"
        });
        
      
    }
});

function validateEmail(email) {
    
    const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return check.test(email);
}
