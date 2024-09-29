document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // You can add more validation here if needed

    // Show the modal
    document.getElementById('modal').style.display = 'block';

    // Optionally reset the form
    this.reset();
});

// Close modal function
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
