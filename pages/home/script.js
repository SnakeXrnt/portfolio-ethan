document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.getElementById("text-container");
    const texts = ["a Developer", "a Coder", "an Innovator", "a UI Designer"]; // Change the dynamic parts
    let currentIndex = 0;
    let isDeleting = false;
    let textIndex = 0;
  
    function animateText() {
      const currentText = texts[currentIndex];
      const prefix = "I'm ";
      const dynamicPart = currentText.slice(0, textIndex);
  
      textContainer.textContent = prefix + dynamicPart;
  
      if (isDeleting) {
        textIndex--;
      } else {
        textIndex++;
      }
  
      if (textIndex > currentText.length) {
        isDeleting = true;
        textIndex = currentText.length;
      }
  
      if (textIndex === 0 && isDeleting) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
      }
    }
  
    setInterval(animateText, 150); // Adjust the speed as needed

    const textContainer2 = document.getElementById("text-container2");
    const dynamicText2 = document.getElementById("dynamic-text2");
    
    function getGreeting() {
      const currentHour = new Date().getHours();
      
      if (currentHour >= 5 && currentHour < 11) {
        return "Good morning";
      } else if (currentHour >= 11 && currentHour < 18) {
        return "Good afternoon";
      } else {
        return "Good evening";
      }
    }
  
    function updateGreeting() {
      const greeting = getGreeting();
      dynamicText2.textContent = greeting;
    }
  
    updateGreeting();

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        sections.forEach(section => section.classList.remove('visible'));
        targetSection.classList.add('visible');
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });