const dots = Array.from(document.querySelectorAll(".dot"));
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

let slideIndex = 1;

function plusSlides(e) {
  let num;

  if (e.target === prevBtn) num = -1;
  if (e.target === nextBtn) num = 1;

  showSlides((slideIndex += num));
}

function currentSlide(e) {
  if (e.target === dots[0]) showSlides((slideIndex = 1));
  if (e.target === dots[1]) showSlides((slideIndex = 2));
  if (e.target === dots[2]) showSlides((slideIndex = 3));
  if (e.target === dots[3]) showSlides((slideIndex = 4));
  if (e.target === dots[4]) showSlides((slideIndex = 5));
}

function showSlides(n) {
  const slides = Array.from(document.querySelectorAll(".slide"));

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  slides.forEach((slide) => slide.classList.remove("is-active"));
  dots.forEach((dot) => dot.classList.remove("is-active"));

  slides[slideIndex - 1].classList.add("is-active");
  dots[slideIndex - 1].classList.add("is-active");
}
dots.forEach((dot) => dot.addEventListener("click", currentSlide));

function toggleNav() {
  navLinks.classList.toggle('active');
}

burger.addEventListener('click', () => {
  const mediaQuery = window.matchMedia('(max-width: 750px)');
  if (mediaQuery.matches) {
    toggleNav();
  }
});

window.addEventListener('resize', () => {
  const mediaQuery = window.matchMedia('(max-width: 750px)');
  if (!mediaQuery.matches) {
    navLinks.classList.remove('active');
  }
});
