alert("JavaScript is loaded!");

document.addEventListener('DOMContentLoaded', function() {
    alert("DOM is ready!");
    
    // Find the volunteer form
    const form = document.querySelector('#volunteer-form form');
    if (form) {
        alert("Found volunteer form!");
        form.addEventListener('submit', function(event) {
            alert("Form submit clicked!");
            event.preventDefault();
        });
    } else {
        alert("Could not find volunteer form!");
    }
});