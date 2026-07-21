const header = document.querySelector("#siteHeader");
const mobileToggle = document.querySelector("#mobileToggle");
const menu = document.querySelector("#mainMenu");

mobileToggle?.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => menu.classList.remove("is-open"));
});

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.14 });

revealItems.forEach((item) => observer.observe(item));

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 40);
});
