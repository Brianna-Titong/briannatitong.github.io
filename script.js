document.addEventListener('DOMContentLoaded', function() {

    const portfolioSection = document.querySelector('.portfolio-section-container');
    const projectTitles = document.querySelectorAll('.project-card h5');
    let imageIndex = 0;

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        alert('Your message has been submitted successfully!');
    });

    // project title changes background
    const backgroundColors = [
    'rgba(98, 23, 8, 0.5)',      
    'rgba(148, 27, 12, 0.5)',
    'rgba(188, 57, 8, 0.5)',    
    'rgba(246, 170, 28, 0.5)',  
    ];

    projectTitles.forEach(title => {
        title.addEventListener('click', function() {
            portfolioSection.style.backgroundColor = backgroundColors[imageIndex];
            imageIndex = (imageIndex + 1) % backgroundColors.length;
        });
    });

    // open and close modals
    const modalButtons = document.querySelectorAll('.project-button');
    const closeButtons = document.querySelectorAll('.close-button');

    // open modal
    function openModal(modalId) {
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    }

    // close modal
    function closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
        }
    }


    modalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal-target');
            openModal(modalId);
        });
    });


    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

});