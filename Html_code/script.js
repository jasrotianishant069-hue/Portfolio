 // Hide loader after full page load
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 800); // thoda delay for effect
  });

 // Dark Mode Toggle
    const toggleBtn = document.getElementById("darkToggle");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Save preference
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️ Light Mode";
      } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙 Dark Mode";
      }
    });

    // Load preference
    window.addEventListener("load", () => {
      if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️ Light Mode";
      }
    });


    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function () {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      }
    });

    // Form submission
    document.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message! I\'ll get back to you soon.');
      this.reset();
    });



    // Counting js

    function animateCounter(counter) {
      const target = +counter.getAttribute("data-target");
      const suffix = counter.getAttribute("data-suffix") || "";
      const duration = 2000;
      let start = null;

      function easeOutQuad(t) {
        return t * (2 - t);
      }

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = easeOutQuad(progress);
        const value = Math.floor(eased * target);
        counter.textContent = value + suffix;

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    }

    // Trigger only when element is visible
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll(".counter").forEach(counter => {
      observer.observe(counter);
    });




    // Typing effect
    const typingElement = document.getElementById("typing");
    const text = "Creative Web Designer | Frontend Developer | UI/UX Enthusiast";
    let index = 0;
    function typeEffect() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
      }
    }
    window.addEventListener("load", typeEffect);


    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    });

    // JS
const cursor = document.createElement("div");
cursor.id = "cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// Cursor enlarge on hover (for links)
document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(2)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});
