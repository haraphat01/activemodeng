// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear()

// Scroll to top button
window.addEventListener("scroll", () => {
  if (document.querySelector(".scroll-top")) {
    if (window.pageYOffset > 300) {
      document.querySelector(".scroll-top").style.display = "block"
    } else {
      document.querySelector(".scroll-top").style.display = "none"
    }
  }
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") !== "#") {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        })
      }
    }
  })
})

// Animate elements on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll")

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (elementPosition < windowHeight - 50) {
      element.classList.add("animated")
    }
  })
}

// Call the function on scroll if there are elements to animate
if (document.querySelectorAll(".animate-on-scroll").length > 0) {
  window.addEventListener("scroll", animateOnScroll)
  // Initial check
  animateOnScroll()
}
