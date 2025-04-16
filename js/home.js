// Project Slider
const sliderWrapper = document.querySelector(".slider-wrapper")
const slides = document.querySelectorAll(".slide")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

let currentSlide = 0
const slideCount = slides.length

// Set up the slider
function setupSlider() {
  if (sliderWrapper && slides.length > 0) {
    // Clone the first slide and append to the end for infinite loop
    const firstSlideClone = slides[0].cloneNode(true)
    sliderWrapper.appendChild(firstSlideClone)

    updateSlider()
  }
}

// Update slider position
function updateSlider() {
  if (sliderWrapper) {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`
  }
}

// Next slide function
function nextSlide() {
  currentSlide++

  if (currentSlide >= slideCount) {
    // Jump to first slide without animation
    setTimeout(() => {
      sliderWrapper.style.transition = "none"
      currentSlide = 0
      updateSlider()

      // Re-enable transition after jump
      setTimeout(() => {
        sliderWrapper.style.transition = "transform 0.5s ease"
      }, 50)
    }, 500)
  }

  updateSlider()
}

// Previous slide function
function prevSlide() {
  if (currentSlide === 0) {
    // Jump to last slide without animation
    sliderWrapper.style.transition = "none"
    currentSlide = slideCount
    updateSlider()

    // Re-enable transition and go to previous slide
    setTimeout(() => {
      sliderWrapper.style.transition = "transform 0.5s ease"
      currentSlide--
      updateSlider()
    }, 50)
  } else {
    currentSlide--
    updateSlider()
  }
}

// Set up event listeners for slider controls
if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", prevSlide)
  nextBtn.addEventListener("click", nextSlide)
}

// Auto slide
let slideInterval

function startSlideInterval() {
  slideInterval = setInterval(nextSlide, 5000)
}

function stopSlideInterval() {
  clearInterval(slideInterval)
}

// Initialize slider
setupSlider()
startSlideInterval()

// Pause auto slide on hover
if (sliderWrapper) {
  sliderWrapper.addEventListener("mouseenter", stopSlideInterval)
  sliderWrapper.addEventListener("mouseleave", startSlideInterval)
}

// Testimonial Slider
const testimonials = document.querySelectorAll(".testimonial")
const dots = document.querySelectorAll(".dot")
let currentTestimonial = 0

// Show testimonial based on index
function showTestimonial(index) {
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active")
  })

  dots.forEach((dot) => {
    dot.classList.remove("active")
  })

  testimonials[index].classList.add("active")
  dots[index].classList.add("active")
  currentTestimonial = index
}

// Set up event listeners for testimonial dots
dots.forEach((dot) => {
  dot.addEventListener("click", function () {
    const index = Number.parseInt(this.getAttribute("data-index"))
    showTestimonial(index)
  })
})

// Auto rotate testimonials
function rotateTestimonials() {
  currentTestimonial++
  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0
  }
  showTestimonial(currentTestimonial)
}

// Start auto rotation
let testimonialInterval = setInterval(rotateTestimonials, 5000)

// Pause rotation on hover
const testimonialContainer = document.querySelector(".testimonial-container")
if (testimonialContainer) {
  testimonialContainer.addEventListener("mouseenter", () => {
    clearInterval(testimonialInterval)
  })

  testimonialContainer.addEventListener("mouseleave", () => {
    testimonialInterval = setInterval(rotateTestimonials, 5000)
  })
}
