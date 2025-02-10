const loginForm = document.querySelector("form");

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const loginEmail = document.getElementById("email").value;
    const loginPassword = document.getElementById("password").value;  

    const storedCredentials = JSON.parse(localStorage.getItem('credentials'));
    console.log(storedCredentials);  

    if (!storedCredentials) {
        alert('No account found. Please sign up first.');
        return;
    }

    // Verify credentials
    if (loginEmail === storedCredentials.email && loginPassword === storedCredentials.password) {
        window.location.href = '/pages/menu.htm';
    } else {
        alert('Invalid email or password.');
    }
});