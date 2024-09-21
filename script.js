// Function to handle page navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const pageId = this.getAttribute('href').replace('#', '');
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    });
});

// Simulate payment success (for demo purposes)
document.getElementById('payment-form').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('loading').style.display = 'block'; // Show loading message
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none'; // Hide loading message
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById('payment-success').classList.add('active');
    }, 2000); // Simulates a 2-second processing time
});
