// // Smooth scroll behavior
// document.querySelectorAll('a[href^="#"]').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     if (target) {
//       target.scrollIntoView({ behavior: 'smooth' });
//     }
//   }); // <-- This closing brace was missing
// });

// // Simple contact form alert
// document.getElementById('contact-form').addEventListener('submit', function (e) {
//   e.preventDefault();
//   alert("Thank you! Your message has been sent.");
//   this.reset();
// });





// // Responsive Test Toolbar Function
// function resizeWindow(w, h) {
//   window.resizeTo(w + 16, h + 96); // add buffer for browser chrome
// }







// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form alert (FIXED selector)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function () {
    alert("Thank you! Your message has been sent.");
  });
}

// Responsive Test Toolbar Function
// function resizeWindow(w, h) {
//   alert(
//     "Browsers block resizing tabs.\n" +
//     "Use Chrome DevTools → Toggle Device Toolbar (Ctrl + Shift + M)"
//   );
// }
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}
