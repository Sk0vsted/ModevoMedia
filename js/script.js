const navSlide =() => {
  const burger = document.querySelector('#burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const anchorlinks = document.querySelectorAll('.nav-links li a')
  
  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      navLinks.forEach((link, index) => {
          if(link.style.animation){
              link.style.animation = '';
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;

              link.style.animation = `navLinkUnderline 0.5s ease forwards ${index/7+0.7}s`;
          }
      });

      anchorlinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
        }
    });

      //Burger Animation
      burger.classList.toggle('toggle');
  });
}
navSlide();

const dots = Array.from(document.querySelectorAll(".dot"));

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



    // Get references to all the image elements
    var teamImages = document.getElementsByClassName("member-img");

    // Loop through the images and bind the changeImage function to the mouseover and mouseout events
    for (var i = 0; i < teamImages.length; i++) {
        teamImages[i].addEventListener("mouseover", function() {
            changeImage(this, this.src.replace("-1.jpg", "-2.jpg"));
        });
        teamImages[i].addEventListener("mouseout", function() {
            changeImage(this, this.src.replace("-2.jpg", "-1.jpg"));
        });
    }

    function changeImage(element, newSrc) {
        // Create a new image object
        var img = new Image();

        // When the new image is loaded, set the src attribute of the element
        img.onload = function() {
          setTimeout(function() {
            element.src = newSrc;
            element.style.opacity = 1;
          }, 100);
        }

        // Set the src attribute of the new image object to the new source
        img.src = newSrc;

        // Fade out the current image by setting its opacity to 0
        element.style.opacity = 0;
    }

    function videreSend() {
      window.location.href="contact-sent.html"
    }
