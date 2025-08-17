document.addEventListener("DOMContentLoaded", () => {
  // banner slider functionality
  let index = 0;
  const slides = document.querySelector(".slides");
  const total = document.querySelectorAll(".slide").length;

  setInterval(() => {
    index = (index + 1) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }, 4000);

  // favorite heart functionality
  const hearts = document.querySelectorAll(".favorite");

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      heart.classList.toggle("active");
    });
  });
});
