// Simple form handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent!');
    this.reset();
});
