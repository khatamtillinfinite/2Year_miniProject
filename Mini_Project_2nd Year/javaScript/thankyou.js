document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("counter");
    let countdown = 5;

    const interval = setInterval(() => {
        countdown -= 1;
        counterElement.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            window.location.href = "/pages/index.html"; // Redirect to the homepage
        }
    }, 1000);
});
