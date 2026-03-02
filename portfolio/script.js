
// =========================
// Smooth Scroll
// =========================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// =========================
// Contact Form with Success Popup
// =========================
const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        showPopup("✅ Message sent successfully!");
        form.reset();
      } else {
        showPopup("❌ Failed to send message. Please try again.");
      }

    } catch (error) {
      showPopup("⚠️ Network error. Check your connection.");
    }
  });
}


// =========================
// Custom Popup Function
// =========================
function showPopup(message) {
  const popup = document.createElement("div");
  popup.innerText = message;

  popup.style.position = "fixed";
  popup.style.bottom = "30px";
  popup.style.right = "30px";
  popup.style.background = "#111";
  popup.style.color = "#fff";
  popup.style.padding = "15px 25px";
  popup.style.borderRadius = "8px";
  popup.style.fontSize = "14px";
  popup.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
  popup.style.zIndex = "9999";
  popup.style.opacity = "0";
  popup.style.transition = "opacity 0.3s ease";

  document.body.appendChild(popup);

  setTimeout(() => popup.style.opacity = "1", 10);

  setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => popup.remove(), 300);
  }, 4000);
}


// =========================
// Slide-in Animation
// =========================
document.addEventListener('DOMContentLoaded', () => {
  const slideElements = document.querySelectorAll('.slide-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  slideElements.forEach(el => observer.observe(el));
});


// =========================
// Sidebar Toggle
// =========================
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}








