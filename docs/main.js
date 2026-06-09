document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const tagline = document.querySelector(".tagline");

  // Simple scroll effect: shrink header slightly on scroll
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 10;
    header.classList.toggle("scrolled", scrolled);
  });

  // Log basic info in the console (nice touch for devs looking at the page)
  console.log("Minecraft Server Info Plotter");
  console.log("Author: Year 8 student (NeonWardonmc)");
});