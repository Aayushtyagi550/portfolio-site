import './style.css'

// Scroll Reveal Animation
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);

// Initial call to reveal elements already in view
document.addEventListener('DOMContentLoaded', () => {
  reveal();
  
  // Custom cursor movement for blobs
  const blob1 = document.getElementById('blob1');
  const blob2 = document.getElementById('blob2');
  
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Subtle reaction to mouse movement
    if (blob1) {
      blob1.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
    }
    if (blob2) {
      blob2.style.transform = `translate(${-x * 0.05}px, ${-y * 0.05}px)`;
    }
  });

  // Smooth Navigation
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
