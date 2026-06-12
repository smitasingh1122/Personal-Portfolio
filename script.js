/**
 * PERSONAL PORTFOLIO WEBSITE INTERACTIVE LOGIC
 * Client: Smita Singh
 * File: script.js
 * Description: Typing effect, project filtering, scroll-driven progress bars,
 * form validation, FormSubmit AJAX, toast notifications, and scroll animations.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. STICKY HEADER & SCROLL-TO-TOP BUTTON
  // ==========================================
  const header = document.querySelector('header');
  const scrollTopBtn = document.querySelector('.scroll-top-btn');

  window.addEventListener('scroll', () => {
    // Sticky Nav toggle
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll to Top visibility
    if (window.scrollY > 500) {
      scrollTopBtn.style.display = 'flex';
      setTimeout(() => scrollTopBtn.style.opacity = '1', 10);
    } else {
      scrollTopBtn.style.opacity = '0';
      setTimeout(() => {
        if (scrollTopBtn.style.opacity === '0') {
          scrollTopBtn.style.display = 'none';
        }
      }, 300);
    }
  });

  // Scroll to Top action
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  // ==========================================
  // 2. MOBILE MENU HAMBURGER TOGGLE
  // ==========================================
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Prevent body scrolling when mobile menu is open
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
  }

  // Close mobile menu when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });


  // ==========================================
  // 3. TYPING EFFECT IN HERO SECTION
  // ==========================================
  const typedTextSpan = document.querySelector('.typed-text');
  const textArray = ["B.Tech Student", "Aspiring Software Developer", "Competitive Programmer"];
  const typingDelay = 100;
  const erasingDelay = 60;
  const newTextDelay = 2000; // Delay between word cycles
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!typedTextSpan) return;
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!typedTextSpan) return;
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 500);
    }
  }

  // Initialize typing effect
  if (typedTextSpan && textArray.length) {
    setTimeout(type, 1000);
  }


  // ==========================================
  // 4. ACTIVE NAVIGATION LINK SPY ON SCROLL
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  
  function scrollActiveSpy() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) + 10);
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', scrollActiveSpy);


  // ==========================================
  // 5. ANIMATIONS ON SCROLL (INTERSECTION OBSERVER)
  // ==========================================
  const fadeUpElements = document.querySelectorAll('.fade-in-up');

  const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger generic fade-up animation
        entry.target.classList.add('active');
        
        // If the entry contains skill progress bars, animate them
        if (entry.target.classList.contains('skills-category')) {
          const barsInThisCategory = entry.target.querySelectorAll('.skill-progress');
          barsInThisCategory.forEach(bar => {
            const percentage = bar.getAttribute('data-percent');
            bar.style.width = percentage + '%';
          });
        }
        
        // Unobserve once animated
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe fade up elements
  fadeUpElements.forEach(el => animationObserver.observe(el));
  
  // Observe skill categories for progress bar animation
  const skillCategories = document.querySelectorAll('.skills-category');
  skillCategories.forEach(cat => animationObserver.observe(cat));


  // ==========================================
  // 6. PROJECTS TAB FILTER
  // ==========================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active class on buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = '';
          card.style.opacity = '0';
          setTimeout(() => card.style.opacity = '1', 50);
        } else {
          const categories = card.getAttribute('data-category').split(' ');
          if (categories.includes(filterValue)) {
            card.style.display = '';
            card.style.opacity = '0';
            setTimeout(() => card.style.opacity = '1', 50);
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });


  // ==========================================
  // 7. CONTACT FORM VALIDATION & FORM SUBMIT
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast-notification');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');

      let isValid = true;

      // Helper function to show errors
      const showError = (input, message) => {
        input.classList.add('error');
        const errorText = input.nextElementSibling;
        if (errorText && errorText.classList.contains('error-text')) {
          errorText.textContent = message;
          errorText.style.display = 'block';
        }
        isValid = false;
      };

      // Helper function to clear errors
      const clearError = (input) => {
        input.classList.remove('error');
        const errorText = input.nextElementSibling;
        if (errorText && errorText.classList.contains('error-text')) {
          errorText.style.display = 'none';
        }
      };

      // Name validation
      if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required.');
      } else {
        clearError(nameInput);
      }

      // Email validation
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required.');
      } else if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.');
      } else {
        clearError(emailInput);
      }

      // Subject validation
      if (subjectInput.value.trim() === '') {
        showError(subjectInput, 'Subject is required.');
      } else {
        clearError(subjectInput);
      }

      // Message validation
      if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required.');
      } else {
        clearError(messageInput);
      }

      // Submit form if valid
      if (isValid) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';

        // Asynchronously POST to FormSubmit AJAX endpoint
        fetch("https://formsubmit.co/ajax/singhsmita825@gmail.com", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: nameInput.value,
            email: emailInput.value,
            subject: subjectInput.value,
            message: messageInput.value,
            _captcha: "false",
            _template: "table"
          })
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Form submission response not OK');
        })
        .then(data => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
          showToast('Message sent successfully! Thank you.');
          contactForm.reset();
        })
        .catch(error => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
          showToast('Failed to send message. Please try again.');
          console.error(error);
        });
      }
    });
  }

  // Toast notifier
  function showToast(message) {
    if (!toast) return;
    const toastMessage = toast.querySelector('.toast-message');
    if (toastMessage) {
      toastMessage.textContent = message;
    }
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
});
