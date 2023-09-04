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

    // Get all skill elements
  const skills = document.querySelectorAll('.skill');

  // Function to animate skills bar on scroll
  function animateSkills() {
    skills.forEach(skill => {
      const progressBar = skill.querySelector('.skill-progress');
      const percentage = skill.querySelector('.skill-percentage').textContent;
      progressBar.style.width = percentage; // Set the width to the percentage value
    });
  }

  // Listen for scroll events and trigger animation
  window.addEventListener('scroll', animateSkills);

    // Add this JavaScript code to your script.js file
  document.addEventListener("scroll", function () {
    // Define the scroll position at which the sections should appear
    const scrollPosition = window.innerHeight / 2;

    // Get references to the sections you want to animate
    const projectsSection = document.getElementById("projects");
    const resumeSection = document.querySelector(".resumepart");

    // Check if the user has scrolled to the project list section
    if (window.scrollY > projectsSection.offsetTop - scrollPosition) {
      projectsSection.classList.add("visible");
    }

    // Check if the user has scrolled to the biodata (resume) section
    if (window.scrollY > resumeSection.offsetTop - scrollPosition) {
      resumeSection.classList.add("visible");
    }
  });

  // Function to update the active navbar link based on the current section
  function updateActiveNavLink() {
    console.log("scroll detected")
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach((section) => {
      const sectionId = section.id;
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      
      // Check if the section is in the viewport
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      
      // Add or remove the "active" class based on visibility
      if (isVisible) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });
  }

  // Listen for scroll events and update the active navbar link
  window.addEventListener('scroll', updateActiveNavLink);
  window.addEventListener('resize', updateActiveNavLink);
  window.addEventListener('load', updateActiveNavLink); // Handle initial state



  });