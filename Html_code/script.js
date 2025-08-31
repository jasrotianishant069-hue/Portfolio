// ===============================
// 1. Page Loader
// ===============================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 800); // Slight delay for visual effect
});

// ===============================
// 2. Dark Mode Toggle
// ===============================
const toggleBtn = document.getElementById("darkToggle");

function setTheme(theme) {
  document.body.classList.toggle("dark-mode", theme === "dark");
  toggleBtn.textContent = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", theme);
}

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
});

toggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-mode");
  setTheme(isDark ? "light" : "dark");
});

// ===============================
// 3. Smooth Scrolling
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===============================
// 4. Navbar Background on Scroll
// ===============================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.style.background =
      window.scrollY > 50
        ? "rgba(255, 255, 255, 0.98)"
        : "rgba(255, 255, 255, 0.95)";
  }
});

// ===============================
// 5. Form Submission
// ===============================
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    form.reset();
  });
}

// ===============================
// 6. Animated Counters
// ===============================
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

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".counter").forEach(counter => {
  counterObserver.observe(counter);
});

// ===============================
// 7. Typing Effect
// ===============================
const typingElement = document.getElementById("typing");
const typingText =
  "Creative Web Designer | Frontend Developer | UI/UX Enthusiast";
let typingIndex = 0;

function typeEffect() {
  if (typingElement && typingIndex < typingText.length) {
    typingElement.textContent += typingText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeEffect, 100);
  }
}

window.addEventListener("load", typeEffect);

// ===============================
// 8. Custom Cursor
// ===============================
const cursor = document.createElement("div");
cursor.id = "cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(2)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});
