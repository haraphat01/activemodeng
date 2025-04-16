// Contact Form Validation and Submission
const contactForm = document.getElementById("contactForm")
const formMessage = document.getElementById("formMessage")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const phone = document.getElementById("phone").value.trim()
    const subject = document.getElementById("subject").value.trim()
    const message = document.getElementById("message").value.trim()

    // Validate form
    if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
      showFormMessage("Please fill in all fields", "error")
      return
    }

    // Validate email
    if (!isValidEmail(email)) {
      showFormMessage("Please enter a valid email address", "error")
      return
    }

    // Simulate form submission (replace with actual form submission)
    showFormMessage("Sending message...", "info")

    // Simulate API call with timeout
    setTimeout(() => {
      // In a real application, you would send the form data to a server here

      // Show success message
      showFormMessage("Your message has been sent successfully. We will contact you soon!", "success")

      // Reset form
      contactForm.reset()
    }, 2000)
  })
}

// Show form message
function showFormMessage(message, type) {
  formMessage.textContent = message

  // Remove all classes
  formMessage.className = "form-message"

  // Add appropriate class
  formMessage.classList.add(type)

  // Show message
  formMessage.style.display = "block"

  // Scroll to message
  formMessage.scrollIntoView({ behavior: "smooth", block: "nearest" })

  // Hide message after 5 seconds if it's a success message
  if (type === "success") {
    setTimeout(() => {
      formMessage.style.display = "none"
    }, 5000)
  }
}

// Validate email function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Google Maps API Integration
// In a real application, you would initialize the Google Maps API here
// This is a placeholder for demonstration purposes
function initMap() {
  // Initialize map
  console.log("Map initialized")
}

// Call initMap when the page loads
window.addEventListener("load", initMap)
