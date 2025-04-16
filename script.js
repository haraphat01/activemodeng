// Basic contact form feedback
const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out. We will get back to you shortly.');
    form.reset();
  });
}
