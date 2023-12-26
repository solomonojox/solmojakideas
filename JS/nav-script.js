// Get references to the navigation links and sections
const navLinks = document.querySelectorAll('.nav_links');
const sections = document.querySelectorAll('.link_selector');

// Function to highlight the active link
function highlightActiveLink() {
  const scrollY = window.scrollY;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      navLinks.forEach((link) => {
        link.classList.remove('nav_active');
      });
      navLinks[index].classList.add('nav_active');
    }
  });
}

// Add event listener for scrolling
window.addEventListener('scroll', highlightActiveLink);

// Trigger initial highlight on page load
highlightActiveLink();
