
document.getElementById('themeToggle').addEventListener('change', function () {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
});
document.querySelectorAll("section, .project-card, .card, .contact-card").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
