function showContent(sectionId, buttonElement) {
    
    let sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    
    let activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

  
    let buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

   
    if (buttonElement) {
        buttonElement.classList.add('active');
    }
}


