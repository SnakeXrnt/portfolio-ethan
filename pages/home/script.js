document.addEventListener("DOMContentLoaded", function () {
    console.log("Caught you inspecting 0-0")
    const textContainer = document.getElementById("text-container");
    const texts = ["I am a developer, turning lines of code into functional magic.", "I am a learner, soaking up knowledge like a sponge in the coding sea.", "I am a UX/UI designer, orchestrating user experiences with a touch of creativity.", "I am a developer, sculpting logic and functionality with the language of bits and bytes.", "I am a learner, navigating the vast landscape of information in pursuit of mastery.", "I am a UX/UI designer, harmonizing aesthetics and functionality for delightful interactions.", "I am a developer, weaving algorithms into the fabric of digital innovation.", "I am a learner, embracing the challenge of continuous growth in the coding realm.", "I am a UX/UI designer, architecting interfaces that seamlessly connect users and technology.", "I am a developer, constructing virtual realities with the keystrokes of possibility."]; // Change the dynamic parts
    let currentIndex = 0;
    let isDeleting = false;
    let textIndex = 0;
  
    function animateText() {
      const currentText = texts[currentIndex];
      const prefix = "";
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
  
    setInterval(animateText, 80); // Adjust the speed as needed

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
  // Function to update the active navbar link based on the current section
  // Function to update the active navbar link based on the current section
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach((section) => {
      const sectionId = section.id;
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      // Calculate the scroll position at which the sections should appear
      const scrollPosition = window.innerHeight / 2;
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top <= scrollPosition && rect.bottom >= scrollPosition;

      // Add or remove the "visible" class based on visibility
      if (isVisible) {
        section.classList.add('visible');
        navLink.classList.add('active');
        // Animate the line
        const line = navLink.querySelector('::after');
        if (line) {
          line.style.width = '100%';
        }
      } else {
        section.classList.remove('visible');
        navLink.classList.remove('active');
        // Reset the line width
        const line = navLink.querySelector('::after');
        if (line) {
          line.style.width = '0';
        }
      }
    });
  }


  // Listen for scroll events and update the active navbar link
  window.addEventListener('scroll', updateActiveNavLink);
  window.addEventListener('resize', updateActiveNavLink);
  window.addEventListener('load', updateActiveNavLink); 

  function updateDateTime() {
    // Get the current date and time
    const currentDate = new Date();
    
    // Format the date and time as desired
    const formattedDateTime = currentDate.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });

    // Update the content of the span element
    document.getElementById('dynamic-text3').textContent = formattedDateTime;
}

// Call the function to update date and time immediately
updateDateTime();

// Optionally, you can update the date and time periodically (e.g., every second)
setInterval(updateDateTime, 1000);



  });