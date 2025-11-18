// Form Validation for Paws & Claws Animal Rescue
// Note: Direct JavaScript is used in HTML files for reliability
// This file is included for project completeness

console.log('Forms.js loaded - Direct JavaScript is used in HTML files');

// Basic form validation functions that could be used
function validateRequired(field, errorMessage) {
    if (!field || !field.value.trim()) {
        alert(errorMessage);
        if (field) field.focus();
        return false;
    }
    return true;
}

function validateEmail(field, errorMessage) {
    if (!field) return false;
    
    const email = field.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        alert(errorMessage);
        field.focus();
        return false;
    }
    return true;
}

// Export functions for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validateRequired, validateEmail };
}