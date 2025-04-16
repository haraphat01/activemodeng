// Project Filtering
const filterBtns = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".project-card")

// Filter projects based on category
function filterProjects(category) {
  projectCards.forEach((card) => {
    const categories = card.getAttribute("data-category").split(" ")

    if (category === "all" || categories.includes(category)) {
      card.style.display = "block"

      // Add animation
      setTimeout(() => {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }, 100)
    } else {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"

      // Hide after animation completes
      setTimeout(() => {
        card.style.display = "none"
      }, 300)
    }
  })
}

// Set up event listeners for filter buttons
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove active class from all buttons
    filterBtns.forEach((btn) => {
      btn.classList.remove("active")
    })

    // Add active class to clicked button
    this.classList.add("active")

    // Get filter category
    const filterCategory = this.getAttribute("data-filter")

    // Filter projects
    filterProjects(filterCategory)
  })
})

// Initialize with "all" filter
filterProjects("all")

// Project Stats Counter
const statNumbers = document.querySelectorAll(".stat-number")
let counted = false

function startCounting() {
  if (counted) return

  statNumbers.forEach((stat) => {
    const target = Number.parseInt(stat.getAttribute("data-count"))
    const duration = 2000 // 2 seconds
    const increment = target / (duration / 16) // 60fps
    let current = 0

    const counter = setInterval(() => {
      current += increment

      if (current >= target) {
        stat.textContent = target
        clearInterval(counter)
      } else {
        stat.textContent = Math.floor(current)
      }
    }, 16)
  })

  counted = true
}

// Check if stats section is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Start counting when stats section is in viewport
const statsSection = document.getElementById("project-stats")
if (statsSection) {
  window.addEventListener("scroll", () => {
    if (isInViewport(statsSection)) {
      startCounting()
    }
  })

  // Check on page load
  if (isInViewport(statsSection)) {
    startCounting()
  }
}
