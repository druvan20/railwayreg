// Add any custom JavaScript here
document.addEventListener("DOMContentLoaded", function () {
  // Example: Smooth Scroll (if you have anchor links or want smooth scroll effects)
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    });
  });
});
