// Storing login credentials after sign up
const form = document.getElementById("signUpForm");

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const username = document.getElementById("FName").value;  // Full Name (username)
    const email = document.getElementById("Email").value;    // Email
    const password = document.getElementById("Password").value; // Password
    
    if (username && email && password) {
        // Create credentials object
        const credentials = {
            username: username,
            email: email,
            password: password
        };

        // Store credentials in localStorage
        localStorage.setItem('credentials', JSON.stringify(credentials));
        
        // Redirect to login page after successful sign up
        window.location.href = '/pages/login.htm';  // Ensure the login page name is correct
    } else {
        alert('Please fill in all fields');
    }
});
