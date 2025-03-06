document.addEventListener('DOMContentLoaded', () => {
    // Navigation Menu Interactivity
    const menuItems = document.querySelectorAll('.nav-link');
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = "white";
            item.style.backgroundColor = "rgba(6, 66, 34, 0.2)";
            item.style.padding = "10px";
            item.style.borderRadius = "5px";
        });

        item.addEventListener('mouseout', () => {
            item.style.color = "black";
            item.style.backgroundColor = "transparent";
            item.style.padding = "10px";  // Consistent padding
            item.style.borderRadius = "5px";  // Consistent border radius
        });
    });      
    
    // Debugging DOM Load
    console.log('DOM fully loaded and parsed');

    // Header Scroll Effect
    const header = document.querySelector('.headers');
    window.addEventListener('scroll', () => {
        console.log('User scrolled');
        header.classList.toggle('scrolled', window.scrollY > 0);
    });

    // Form Submission Interactivity
    document.getElementById('contactform').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting
        document.getElementById('confirmationMessage').style.display = 'block';
    });

    // Character Counter for Message Text Area
    document.getElementById('message').addEventListener('input', (event) => {
        const maxLength = event.target.maxLength;
        const currentLength = event.target.value.length;
        const charCount = document.getElementById('charCount');
        charCount.textContent = `${maxLength - currentLength} characters remaining`;
    });
});

  
   