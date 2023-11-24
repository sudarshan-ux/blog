// Add JavaScript code for additional functionality or interactions
// For example, you can use it to trigger animations dynamically

// Function to trigger an animation on scroll
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.college');
  
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
  
      // If the element is in the viewport, add the 'fadeIn' class
      if (elementPosition < window.innerHeight) {
        element.classList.add('fadeIn');
      }
    });
  }
  
  
  // Animation for the initial load
  gsap.to('.container', { opacity: 1, transform: 'translateY(0)', duration: 1, ease: 'power2.inOut' });
  gsap.to('.college', { opacity: 1, transform: 'translateY(0)', duration: 1, ease: 'power2.out', stagger: 0.2 });
  
  // Function to trigger an animation on scroll
  function fadeInOnScroll() {
    const elements = document.querySelectorAll('.college');
  
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
  
      // If the element is in the viewport, add the 'fadeIn' class
      if (elementPosition < window.innerHeight) {
        gsap.to(element, { opacity: 1, transform: 'translateY(0)', duration: 1, ease: 'power2.out' });
      }
    });
  }
  
  // Event listener for scroll
  window.addEventListener('scroll', fadeInOnScroll);
  
  
  // Animation for the initial load
  gsap.to('.container', { opacity: 1, transform: 'translateY(0) scale(1)', duration: 1, ease: 'power2.inOut' });
  gsap.to('.college', { opacity: 1, transform: 'translateY(0) scale(1)', duration: 1, ease: 'power2.out', stagger: 0.2 });
  
  // Function to trigger an animation on scroll
  function fadeInOnScroll() {
    const elements = document.querySelectorAll('.college');
  
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
  
      // If the element is in the viewport, add the 'fadeIn' class
      if (elementPosition < window.innerHeight) {
        gsap.to(element, { opacity: 1, transform: 'translateY(0) scale(1)', duration: 1, ease: 'power2.out' });
      }
    });
  }
  
  // Event listener for scroll
  window.addEventListener('scroll', fadeInOnScroll);
  
  
  
  // Enable ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // Animation for the initial load
  gsap.to('.container', {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
    duration: 1,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.container',
      start: 'top 80%', // Adjust the start position based on your preference
      end: 'top 20%', // Adjust the end position based on your preference
      scrub: true, // Smooth scrolling effect
    },
  });
  
  gsap.to('.college', {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
    duration: 1,
    ease: 'power2.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.college',
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
    },
  });
  
  // Function to trigger an additional animation on scroll
  function fadeInOnScroll() {
    const elements = document.querySelectorAll('.college');
  
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
  
      // If the element is in the viewport, add the 'fadeIn' class
      if (elementPosition < window.innerHeight) {
        gsap.to(element, {
          opacity: 1,
          transform: 'translateY(0) scale(1)',
          duration: 1,
          ease: 'power2.out',
        });
      }
    });
  }
  
  // Event listener for scroll
  window.addEventListener('scroll', fadeInOnScroll);
  
  
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}