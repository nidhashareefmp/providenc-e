// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
scrollTopBtn.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

// Contact form EmailJS
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  emailjs.send("service_l14kjlo", "template_pa6oe0c", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  }).then(() => {
    alert("Message sent successfully!");
    e.target.reset();
  }, () => {
    alert("Failed to send message.");
  });
});


window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.custom-navbar');
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
